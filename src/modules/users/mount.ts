import { Express } from "express";

import { controller as signInController, ROUTE as signInRoute } from "./sign-in";
import { controller as signUpController, ROUTE as signUpRoute } from "./sign-up";

export const mount = (app: Express) => {
  app.post(signUpRoute, signUpController).post(signInRoute, signInController);
};
