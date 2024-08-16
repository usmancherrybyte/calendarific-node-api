import axios from "axios";
import { apiKey, apiUrl } from "../config/config.js";

export async function getHolidays(country, year) {
  try {
    const response = await axios.get(`${apiUrl}/holidays`, {
      params: {
        api_key: apiKey,
        country,
        year,
      },
    });
    return response.data.response.holidays;
  } catch (error) {
    console.error("Error fetching holidays:", error.message);
    console.error("API Response:", error.response?.data);
    throw new Error(error.message);
  }
}

export async function getCountries() {
  try {
    const response = await axios.get(`${apiUrl}/countries`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data.response.countries;
  } catch (error) {
    console.error("Error fetching countries:", error.message);
    console.error("API Response:", error.response?.data);
    throw new Error(error.message);
  }
}
