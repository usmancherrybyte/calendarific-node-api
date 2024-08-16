import request from "supertest";
import app from "../app.js";

describe("GET /api/holidays", () => {
  it("should return holidays for a specified country and year", async () => {
    const response = await request(app)
      .get("/api/holidays")
      .query({ country: "PAK", year: "2024" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should return a bad request error if country or year is missing", async () => {
    const response = await request(app).get("/api/holidays");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("status", false);
    expect(response.body).toHaveProperty(
      "message",
      "Country and year are required"
    );
  });

  it("should return an error if the API fails", async () => {
    // Simulate API failure if needed (mocking required)
    const response = await request(app)
      .get("/api/holidays")
      .query({ country: "PAK", year: "2024" });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("status", false);
    expect(response.body).toHaveProperty("message");
  });
});
