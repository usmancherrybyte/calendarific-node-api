import express from "express";
import { getHolidays } from "../services/calendarificService.js";
import { setCache, getCache } from "../services/cacheService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { country, year } = req.query;
  if (!country || !year) {
    return res
      .status(400)
      .json({ status: false, message: "Country and year are required" });
  }

  const cacheKey = `holidays_${country}_${year}`;
  const cachedData = getCache(cacheKey);

  if (cachedData) {
    return res.json({ status: true, message: "Data found", data: cachedData });
  }

  try {
    const holidays = await getHolidays(country, year);
    setCache(cacheKey, holidays);
    if (holidays && holidays.length > 0)
      return res.json({ status: true, message: "Data found", data: holidays });
    else
      return res.json({
        status: false,
        message: "Data not found",
        data: holidays,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
});

export default router;
