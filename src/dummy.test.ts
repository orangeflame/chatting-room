import * as request from "supertest";
import { app } from "./app";

test("dummy test", (done) => {
  request(app)
    .get("/health")
    .then((res) => {
      expect(res.status).toBe(200);
      done();
    });
});
