import { createController } from "modules/core";

export const controller = createController((req, res) => {
  res.status(200).send(":)");
});
