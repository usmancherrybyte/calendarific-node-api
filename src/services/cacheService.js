import NodeCache from "node-cache";
import { cacheTTL } from "../config/config.js";

const cache = new NodeCache({ stdTTL: cacheTTL });

export function setCache(key, value) {
  cache.set(key, value);
}

export function getCache(key) {
  return cache.get(key);
}
