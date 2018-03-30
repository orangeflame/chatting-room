import { Express } from "express";

import { controller as getController } from "./get";
import { controller as postController } from "./post";
import { ROUTE } from "./route";

export const mount = (app: Express) => {
  app.get(ROUTE, getController);
  app.post(ROUTE, postController);
};
