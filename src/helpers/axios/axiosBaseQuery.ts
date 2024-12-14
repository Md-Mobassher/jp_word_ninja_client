/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface IMeta {
  [key: string]: any; // Define this as per your needs
}

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";

export const axiosBaseQuery = async ({
  url,
  method = "GET",
  data,
  params,
  headers,
  contentType,
}: {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  contentType?: string;
  meta?: IMeta;
}) => {
  try {
    const result = await axios({
      url: `${baseUrl}${url}`,
      method,
      data,
      params,
      headers: {
        "Content-Type": contentType || "application/json",
        ...headers,
      },
    });

    // Success Response
    return {
      success: true,
      status: result.status,
      data: result.data,
    };
  } catch (error) {
    const err = error as AxiosError;

    // Error Response
    return {
      success: false,
      status: err.response?.status || 500,
      error: err.response?.data || err.message || "Something went wrong!",
    };
  }
};
