import { SignupRequest } from "./types";

export const isSignupRequest = (input: any): input is SignupRequest => {
  if (typeof input !== "object") return false;
  if (typeof input.username !== "string") return false;
  if (typeof input.password !== "string") return false;
  return !!input.username && !!input.password;
};
