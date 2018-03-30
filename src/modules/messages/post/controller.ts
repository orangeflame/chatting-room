import { createController } from "modules/core";
import { db, tables } from "modules/db";

export const controller = createController(async (req, res) => {
  const data = await db.doc.scan({ TableName: tables.messages }).promise();
  res.status(200).json(data);
});
