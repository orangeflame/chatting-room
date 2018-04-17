import { Express } from "express";

import { controller, ROUTE as signUp } from "./sign-up";

export const mount = (app: Express) => {
  app.post(signUp, controller);
};
