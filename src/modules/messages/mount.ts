import { Express } from "express";
import * as passport from "passport";

import { authenicate } from "modules/authenication";

import { controller as getController } from "./get";
import { controller as postController } from "./post";
import { ROUTE } from "./route";

export const mount = (app: Express) => {
  app.get(ROUTE, authenicate(), getController);
  app.post(ROUTE, authenicate(), postController);
};
