import * as winston from "winston";

export const logger = new winston.Logger({
  handleExceptions: true,
  level: "silly",
  transports: [
    new winston.transports.Console({
      colorize: true,
      prettyPrint: true,
      timestamp: true,
    }),
  ],
});
