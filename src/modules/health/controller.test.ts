import { appSetup } from "app";
import * as request from "supertest";

import { ROUTE } from "./route";

jest.mock("modules/db/setup/setup");

test("dummy test", async () => {
  const res = await request(await appSetup()).get(ROUTE);
  expect(res.status).toBe(200);
});
