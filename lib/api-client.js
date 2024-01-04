import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: "http://13.201.68.224/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
