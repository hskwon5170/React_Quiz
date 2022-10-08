import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://opentdb.com",
};
export const axiosInstance = axios.create(config);
