import { Message } from "./Message";
import { SerializeMessage } from "./SerializeMessage";

export const serialize = ({ id, message, sentAt, receivedByServerAt }: Message): SerializeMessage => ({
  id,
  message,
  receivedByServerAt: receivedByServerAt.toISO(),
  sentAt: sentAt.toISO(),
});
