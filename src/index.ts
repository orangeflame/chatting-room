import { logger } from "modules/core";

import { app } from "./app";

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  logger.info("dega");
});
