import { RequestHandler } from "express";

import { logger } from "../logger";

export function createController(controller: RequestHandler): RequestHandler {
  const wrapper: RequestHandler = async (req, res, next) => {
    try {
      return await controller(req, res, next);
    } catch (e) {
      logger.error("Controller has crashed:", e);
      res.status(500).send("Internal Server Error");
    }
  };

  return wrapper;
}
