import * as bodyPaser from "body-parser";
import * as express from "express";
import * as passport from "passport";
import { BasicStrategy } from "passport-http";

import { setup as setupAuthenication } from "modules/authenication";
import { setup as setupDB } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";
import { mount as mountUsers } from "modules/users";

export const appSetup = async () => {
  await setupDB();
  const app = express();
  app.use(bodyPaser.json());
  mountHealth(app);
  mountUsers(app);
  setupAuthenication(app);
  mountMessage(app);
  return app;
};
