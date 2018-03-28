import { client } from "../client";
import { tables } from "../tables";

export async function setup() {
  const existingTables = await client.raw.listTables().promise();

  if (!existingTables.TableNames!.includes(tables.messages)) {
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
}
