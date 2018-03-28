import * as express from "express";

import { client } from "./modules/db/client";

const app = express();

app.get("/health", (req, res) =>
  res.status(200).json({
    message: "All is superme well",
  }),
);

app.get("/messages", async (req, res) => {
  await client.doc.scan({ TableName: "message" }).promise();
  res.status(200).json({
    message: "I exist!",
  });
});

export { app };
