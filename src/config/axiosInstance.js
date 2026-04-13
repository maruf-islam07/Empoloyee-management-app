import axios from "axios";

const api = axios.create({
  baseURL: "https://69db98df560857310a07d32d.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
