import { BAD_REQUEST } from "http-status-codes";
import * as shortid from "shortid";

import { createController } from "modules/core";
import { db, tables } from "modules/db";

import { isSignupRequest } from "./isSignupRequest";

export const controller = createController(async (req, res) => {
  if (!isSignupRequest(req.body)) {
    return res.status(BAD_REQUEST).send("Bad request");
  }
  const user = {
    id: shortid.generate(),
    ...req.body,
  };
  await db.doc
    .put({
      Item: user,
      TableName: tables.users,
    })
    .promise();
  res.status(200).send(user);
});
