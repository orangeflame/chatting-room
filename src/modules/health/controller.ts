import { createController } from "../core";

export const controller = createController((req, res) =>
  res.status(200).json({
    message: "All is superme well",
  }),
);
