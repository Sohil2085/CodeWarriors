const stripTrailingSlash = (value = "") =>
  value.endsWith("/") ? value.slice(0, -1) : value;

const BASE_URL =
  stripTrailingSlash(import.meta.env.VITE_API_URL) || "http://localhost:8080";

export const API_BASE_URL = `${BASE_URL}/api/v1`;

export const getAssetUrl = (path) => {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE_URL}/${path.replace(/^\/+/, "")}`;
};

export default BASE_URL;

