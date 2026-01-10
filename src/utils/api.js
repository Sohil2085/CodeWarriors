import axios from "axios";
import { API_BASE_URL } from "./url";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // send cookies
});

// NO Authorization header
// NO localStorage token

export const getAllProblems = async () => {
  const res = await API.get("/problems");
  return res.data;
};

export const getProblemById = async (id) => {
  const res = await API.get(`/problems/${id}`);
  return res.data;
};

export const createProblem = async (problemData) => {
  const res = await API.post("/problems", problemData);
  return res.data;
};

export default API;
