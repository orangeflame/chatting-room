import { BAD_REQUEST } from "http-status-codes";
import * as shortid from "shortid";

import { createController } from "modules/core";
import { db, tables } from "modules/db";

import { allFromDb } from "../allFromDb";

import { isSignUpRequest } from "./isSignUpRequest";

export const controller = createController(async (req, res) => {
  if (!isSignUpRequest(req.body)) {
    return res.status(BAD_REQUEST).send("Bad request");
  }
  const user = {
    id: shortid.generate(),
    ...req.body,
  };

  const users = await allFromDb();
  const foundUser = users.find((it) => it.username === req.body.username);
  if (foundUser) {
    return res.status(BAD_REQUEST).send(`The ${req.body.username} already exists`);
  }
  await db.doc
    .put({
      Item: user,
      TableName: tables.users,
    })
    .promise();
  res.status(200).send(user);
});
