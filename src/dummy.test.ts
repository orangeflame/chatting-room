import * as request from "supertest";
import { app } from "./app";

test("dummy test", async () => {
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
});
