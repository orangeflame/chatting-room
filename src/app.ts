import * as express from "express";

import { db, setup, tables } from "modules/db";
import { mount as mountHealth } from "modules/health";
import { mount as mountMessage } from "modules/messages";

const app = express();
mountHealth(app);
mountMessage(app);

export { app };
