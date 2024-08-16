import express from "express";
import { getCountries } from "../services/calendarificService.js";
import { setCache, getCache } from "../services/cacheService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const cacheKey = "countries";
  const cachedData = getCache(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const countries = await getCountries();
    setCache(cacheKey, countries);
    if (countries && countries.length > 0)
      res.json({ status: true, message: "Data found", data: countries });
    else
      res.json({ status: false, message: "Data not found", data: countries });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
});

export default router;
