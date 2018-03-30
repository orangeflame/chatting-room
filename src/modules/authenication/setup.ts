import { Express } from "express";
import * as passport from "passport";

import { BasicStrategy } from "passport-http";

import { authenicate } from "modules/authenication";
import { db, tables } from "modules/db";

export const setup = (app: Express) => {
  app.use(passport.initialize());
  passport.use(
    new BasicStrategy(async (username, password, done) => {
      const { Items: users } = await db.doc
        .scan({
          TableName: tables.users,
        })
        .promise();
      const user = users!.find((it) => it.username === username && it.password === password);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }),
  );
  app.use(authenicate());
};
