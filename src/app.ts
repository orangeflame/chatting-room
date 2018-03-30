import * as bodyPaser from "body-parser";
import * as express from "express";
import * as passport from "passport";
import { BasicStrategy } from "passport-http";

import { setup as setupAuthenication } from "modules/authenication";
import { setup as setupDB } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";

export const appSetup = async () => {
  const app = express();
  app.use(bodyPaser.json());
  app.use(passport.initialize());
  mountHealth(app);
  await setupDB();
  await setupAuthenication(app);

  passport.use(
    new BasicStrategy((username, password, done) => {
      if (username === "le" && password === "le") {
        return done(null, {});
      }
      return done(null, false);
    }),
  );

  mountMessage(app);
  return app;
};
