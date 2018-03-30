import { appSetup } from "app";
import * as request from "supertest";

import { ROUTE } from "./route";

test("dummy test", async () => {
  const res = await request(await appSetup()).get(ROUTE);
  expect(res.status).toBe(200);
});
