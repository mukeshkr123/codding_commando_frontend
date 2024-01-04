import axios from "axios";

//  baseURL: "http://localhost:8000/api/v1",

const apiClient = axios.create({
  baseURL: "http://13.201.68.224/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
