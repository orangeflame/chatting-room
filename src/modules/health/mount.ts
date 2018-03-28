import { Express } from "express";

import { controller } from "./controller";

export const mount = (app: Express) => {
  app.get("/health", controller);
};
