import { OK } from "http-status-codes";
import { createController } from "modules/core";

export const controller = createController((req, res) =>
  res.status(OK).json({
    message: "All is superme well",
  }),
);
