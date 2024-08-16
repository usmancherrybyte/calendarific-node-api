import axios from "axios";
import { getHolidays, getCountries } from "../services/calendarificService.js";
jest.mock("axios");

const apiKey = "test-api-key";
const apiUrl = "https://calendarific.com/api/v2";

describe("Calendarific Service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch holidays", async () => {
    const holidaysData = {
      response: { holidays: [{ date: "2024-01-01", name: "New Year's Day" }] },
    };
    axios.get.mockResolvedValue({ data: holidaysData });

    const holidays = await getHolidays("PAK", "2024");
    expect(holidays).toEqual(holidaysData.response.holidays);
    expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/holidays`, {
      params: { api_key: apiKey, country: "PAK", year: "2024" },
    });
  });

  it("should fetch countries", async () => {
    const countriesData = {
      response: { countries: [{ code: "PAK", name: "Pakistan" }] },
    };
    axios.get.mockResolvedValue({ data: countriesData });

    const countries = await getCountries();
    expect(countries).toEqual(countriesData.response.countries);
    expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/countries`, {
      params: { api_key: apiKey },
    });
  });
});
