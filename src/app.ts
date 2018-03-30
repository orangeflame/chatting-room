import * as bodyPaser from "body-parser";
import * as express from "express";

import { setup } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";

export const appSetup = async () => {
  await setup();
  const app = express();
  app.use(bodyPaser.json());
  mountHealth(app);
  mountMessage(app);
  return app;
};
