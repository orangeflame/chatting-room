import { Express } from "express";

import { controller as getController } from "./get";
import { ROUTE } from "./route";

export const mount = (app: Express) => {
  app.get(ROUTE, getController);
};
