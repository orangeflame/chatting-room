import { logger } from "modules/core";

import { client } from "../client";
import { tables } from "../tables";

export async function setup() {
  const existingTables = await client.raw.listTables().promise();

  if (!existingTables.TableNames!.includes(tables.messages)) {
    logger.info(`Table ${tables.messages} is missing. Will create it.`);
    await client.raw
      .createTable({
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH",
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
        TableName: tables.messages,
      })
      .promise();
  }

  if (!existingTables.TableNames!.includes(tables.users)) {
    logger.info(`Table ${tables.users} is missing. Will create it.`);
    await client.raw
      .createTable({
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH",
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
        TableName: tables.users,
      })
      .promise();
  }
}
