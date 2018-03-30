import { Message } from "./Message";
import { SerializeMessage } from "./SerializeMessage";

export const serialize = ({ id, message, sentAt, receivedByServerAt, userId }: Message): SerializeMessage => ({
  id,
  message,
  receivedByServerAt: receivedByServerAt.toISO(),
  sentAt: sentAt.toISO(),
  userId,
});
