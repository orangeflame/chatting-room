import { BAD_REQUEST, OK } from "http-status-codes";
import * as shortid from "shortid";

import { logger } from "modules/core";
import { createController } from "modules/core";
import { db, tables } from "modules/db";

import { isMessageRequest } from "./isMessageRequest";
import { MessageRequest } from "./types";

export const controller = createController(async (req, res) => {
  const body: MessageRequest = req.body;
  if (!isMessageRequest(body)) {
    return res.status(BAD_REQUEST).send("Bad request");
  }
  logger.info(req.body);
  const data = await db.doc
    .put({
      Item: {
        id: shortid.generate(),
        ...req.body,
      },
      TableName: tables.messages,
    })
    .promise();
  res.status(OK).json(data);
});
