import { INTERNAL_SERVER_ERROR } from "http-status-codes";

import { RequestHandler } from "express";

import { logger } from "../logger";

export function createController(controller: RequestHandler): RequestHandler {
  const wrapper: RequestHandler = async (req, res, next) => {
    try {
      return await controller(req, res, next);
    } catch (e) {
      logger.error("Controller has crashed:", e);
      res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
    }
  };

  return wrapper;
}
