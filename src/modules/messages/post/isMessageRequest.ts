import { MessageRequest } from "./types";

export const isMessageRequest = (input: any): input is MessageRequest => {
  if (typeof input !== "object") return false;
  if (typeof input.message !== "string") return false;
  if (typeof input.sentAt !== "string") return false;
  return !!input.message && !!input.sentAt;
};
