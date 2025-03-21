import axios from "axios";

const connection = () => {
  const api = axios.create({
    baseURL: "http://localhost:8222",
    headers: {
      "Content-Type": "application/json",
    },
  });
  api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  return api;
};

export default connection;
