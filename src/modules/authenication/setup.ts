import { Express } from "express";
import * as passport from "passport";

import { BasicStrategy } from "passport-http";

import { authenicate } from "modules/authenication";

export const setup = (app: Express) => {
  app.use(passport.initialize());
  passport.use(
    new BasicStrategy((username, password, done) => {
      if (username === "le" && password === "le") {
        return done(null, {});
      }
      return done(null, false);
    }),
  );
  app.use(authenicate());
};
