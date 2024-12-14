/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_ROLE } from "@/constant/role";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage?: number;
};

export type UserRole = keyof typeof USER_ROLE;

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
