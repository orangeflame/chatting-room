import { BAD_REQUEST, OK, UNAUTHORIZED } from "http-status-codes";
import * as shortid from "shortid";

import { createController } from "modules/core";
import { db, tables } from "modules/db";

import { allFromDb } from "../allFromDb";

import { isSignInRequest } from "./isSignUpRequest";

export const controller = createController(async (req, res) => {
  if (!isSignInRequest(req.body)) {
    return res.status(BAD_REQUEST).send("Bad request");
  }
  const users = await allFromDb();
  const foundUser = users.find((it) => it.username === req.body.username && it.password === req.body.password);
  if (foundUser) {
    return res.status(OK).json(foundUser);
  }
  return res.status(UNAUTHORIZED).json({
    message: "The User or Password is not correct",
  });
});
