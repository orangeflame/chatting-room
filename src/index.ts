import { logger } from "modules/core";

import { appSetup } from "./app";

const { PORT = 8080 } = process.env;

(async () => {
  const app = await appSetup();

  app.listen(PORT, () => {
    logger.info("dega");
  });
})();
