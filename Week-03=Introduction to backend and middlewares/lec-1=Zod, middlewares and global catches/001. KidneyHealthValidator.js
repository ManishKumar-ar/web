
const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  // do health checks here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "harkirat" && password != "123") {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "wrong inputs",
    });
    return;
  }

  // do something with kidney here
  res.send("Your heart is healthy");
});







