import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials : true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getAllProblems = async () => {
  const res = await API.get('/problems');
  return res.data;
};

export const getProblemById = async (id) => {
  const res = await API.get(`/problems/${id}`);
  return res.data;
};

export const createProblem = async (problemData) => {
  const res = await API.post('/problems', problemData);
  return res.data;
};

export default API;
