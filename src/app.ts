import * as express from "express";

import { client } from "./modules/db/client";
import { setup } from "./modules/db/setup";
import { tables } from "./modules/db/tables";

const app = express();

app.get("/health", (req, res) =>
  res.status(200).json({
    message: "All is superme well",
  }),
);

app.get("/messages", async (req, res) => {
  await setup();
  const data = await client.doc.scan({ TableName: tables.messages }).promise();
  res.status(200).json({
    message: data,
  });
});

export { app };
