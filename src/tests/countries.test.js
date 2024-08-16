import request from "supertest";
import server from "../app.js";

describe("GET /api/countries", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a list of countries", async () => {
    const response = await request(server).get("/api/countries");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should return an error if the API fails", async () => {
    // Simulate API failure if needed (mocking required)
    const response = await request(server).get("/api/countries");

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("status", false);
    expect(response.body).toHaveProperty("message");
  });
});
