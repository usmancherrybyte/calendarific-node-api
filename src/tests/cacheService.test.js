import { setCache, getCache } from "../services/cacheService.js";

describe("Cache Service", () => {
  it("should set and get cache correctly", () => {
    const key = "testKey";
    const value = { data: "testData" };

    setCache(key, value);
    const cachedValue = getCache(key);

    expect(cachedValue).toEqual(value);
  });

  it("should return undefined for non-existent cache key", () => {
    const cachedValue = getCache("nonExistentKey");

    expect(cachedValue).toBeUndefined();
  });
});
