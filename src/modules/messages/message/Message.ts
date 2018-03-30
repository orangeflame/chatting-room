import { DateTime } from "luxon";

export interface Message {
  id: string;
  message: string;
  sentAt: DateTime;
  receivedByServerAt: DateTime;
  userId: string;
}
