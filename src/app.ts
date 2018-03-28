import * as express from "express";

import { db, setup, tables } from "./modules/db";

const app = express();

app.get("/health", (req, res) =>
  res.status(200).json({
    message: "All is superme well",
  }),
);

app.get("/messages", async (req, res) => {
  await setup();
  const data = await db.doc.scan({ TableName: tables.messages }).promise();
  res.status(200).json({
    message: data,
  });
});

export { app };
