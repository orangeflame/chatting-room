const express = require("express");

const app = express();

app.get("/health", (req, res) =>
  res.status(200).json({
    message: "All is well",
  }),
);

app.listen(8080, () => {
  console.log("dega");
});
