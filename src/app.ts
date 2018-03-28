import * as express from "express";

import { db, setup, tables } from "modules/db";
import { mount as mountHealth } from "modules/health";

const app = express();
mountHealth(app);

app.get("/messages", async (req, res) => {
  await setup();
  const data = await db.doc.scan({ TableName: tables.messages }).promise();
  res.status(200).json({
    message: data,
  });
});

export { app };
