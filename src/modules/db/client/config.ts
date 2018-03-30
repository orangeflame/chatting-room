import { getEnv } from "modules/core";

export const config = {
  accessKeyId: getEnv("DB_ACCESS_KEY_ID", "MOCK_ACCESS_KEY_ID"),
  endpoint: getEnv("DB_ENDPOINT", "http://dynamodb:8000"),
  region: getEnv("DB_REGION", "localhost"),
  secretAccessKey: getEnv("DB_SECRET_ACCESS_KEY", "MOCK_SECRET_ACCESS_KEY"),
};
