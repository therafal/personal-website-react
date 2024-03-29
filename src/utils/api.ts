import axios, { AxiosRequestConfig } from "axios";
import { LoginParams, LoginResponse, Post } from "./types";

const API_URL = process.env.API_URL || "/api";

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postLogin = async (data: LoginParams): Promise<LoginResponse> => {
  const response = await axiosClient.post("/v1/auth/login", data, config);
  return response.data;
};

export const deleteSessions = async (): Promise<void> => {
  await axiosClient.delete("/v1/auth/sessions", config);
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await axiosClient.get("/v1/posts");
  return response.data;
};
