import * as express from "express";

import { setup } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";

export const appSetup = async () => {
  await setup();
  const app = express();
  mountHealth(app);
  mountMessage(app);
  return app;
};
