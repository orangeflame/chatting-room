import { logger } from "../logger";

export const getEnv = (name: string, defaultValue: string = ""): string => {
  const value = process.env[name];
  if (!value) {
    logger.warn(`Environment variable ${name} is not set. Will use default value "${defaultValue}"`);
    return defaultValue;
  }
  return value;
};
