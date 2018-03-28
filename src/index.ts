import { app } from "./app";
import { logger } from "./logger";

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  logger.info("dega");
});
