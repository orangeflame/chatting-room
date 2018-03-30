import { BAD_REQUEST } from "http-status-codes";
import { createController } from "modules/core";

import { isSignupRequest } from "./isSignupRequest";

export const controller = createController((req, res) => {
  if (!isSignupRequest(req.body)) {
    return res.status(BAD_REQUEST).send("Bad request");
  }
  res.status(200).send(":)");
});
