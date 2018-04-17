import { SignInRequest } from "./SignInRequest";

export const isSignInRequest = (input: any): input is SignInRequest => {
  if (typeof input !== "object") return false;
  if (typeof input.username !== "string") return false;
  if (typeof input.password !== "string") return false;
  return !!input.username && !!input.password;
};
