import { DynamoDB } from "aws-sdk";

import { config } from "./config";

const { accessKeyId, endpoint, region, secretAccessKey } = config;
export const doc = new DynamoDB.DocumentClient({ accessKeyId, endpoint, region, secretAccessKey });
export const raw = new DynamoDB({ accessKeyId, endpoint, region, secretAccessKey });
