import { Express } from "express";

import { controller } from "./controller";
import { ROUTE } from "./route";

export const mount = (app: Express) => {
  app.get(ROUTE, controller);
};
