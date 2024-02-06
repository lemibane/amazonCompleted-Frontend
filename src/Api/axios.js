import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deployment.onrender.com",
});

export { axiosInstance };
