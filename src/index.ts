import { app } from "./app";
import { logger } from "./logger";

app.listen(8080, () => {
  logger.info("dega");
});
