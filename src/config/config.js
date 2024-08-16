import dotenv from "dotenv";

dotenv.config();

export const apiKey = process.env.CALENDARIFIC_API_KEY;
export const apiUrl = process.env.CALENDARIFIC_API_URL;
export const cacheTTL = process.env.CACHE_TTL || 3600;
export const port = process.env.PORT || 3000;
