import axios from "axios";
import { baseUrl, accessToken } from "@/constants/env";

const apiClient = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default apiClient;
