import { logger } from "modules/core";
import { createController } from "modules/core";
import { db, tables } from "modules/db";

import { isMessageRequest } from "./isMessageRequest";
import { MessageRequest } from "./types";

export const controller = createController(async (req, res) => {
  const body: MessageRequest = req.body;
  if (!isMessageRequest(body)) {
    return res.status(400).send("Bad request");
  }
  logger.info(req.body);
  const data = await db.doc.scan({ TableName: tables.messages }).promise();
  res.status(200).json(data);
});
