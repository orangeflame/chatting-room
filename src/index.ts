import { app } from "./app";
import { logger } from "./modules/core";

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  logger.info("dega");
});
