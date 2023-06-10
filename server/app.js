const express = require("express");
const app = express();
const port = 3011;

app.get("/phone-cave", (req, res) => {
  res.send("Hello Again World Cave!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
