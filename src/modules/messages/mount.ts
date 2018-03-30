import { Express } from "express";
import * as passport from "passport";

import { controller as getController } from "./get";
import { controller as postController } from "./post";
import { ROUTE } from "./route";

export const mount = (app: Express) => {
  app.get(ROUTE, passport.authenticate("basic", { session: false }), getController);
  app.post(ROUTE, postController);
};
