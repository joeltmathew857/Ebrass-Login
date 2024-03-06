const express = require("express");
const app = express();
const events = require("events");
const path = require("path");
const fs = require("fs");
const Myemitter = new events();


app.listen(3002, () => {
  console.log(`The server is listening on port ${3002}`);
});
