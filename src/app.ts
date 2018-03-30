import * as bodyPaser from "body-parser";
import * as express from "express";
import * as passport from "passport";
import { BasicStrategy } from "passport-http";

import { setup } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";

export const appSetup = async () => {
  await setup();
  const app = express();
  app.use(bodyPaser.json());
  app.use(passport.initialize());

  passport.use(
    new BasicStrategy((username, password, done) => {
      if (username === "le" && password === "le") {
        return done(null, {});
      }
      return done(null, false);
    }),
  );
  mountHealth(app);
  mountMessage(app);
  return app;
};
