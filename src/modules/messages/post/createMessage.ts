import { DateTime } from "luxon";
import * as shortid from "shortid";

import { Message } from "../Message";

import { MessageRequest } from "./types";

export const createMessage = ({ message, sentAt }: MessageRequest, userId: string): Message => {
  return {
    id: shortid.generate(),
    message,
    receivedByServerAt: DateTime.local(),
    sentAt: DateTime.fromISO(sentAt),
    userId,
  };
};
