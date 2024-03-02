const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:submit", (req, res) => {
  const finds = req.params.submit;
  console.log(finds);
  res.send(`you enter is ${finds}`);
});

app.get("/sum", (req, res) => {
  // Destructure the 'a' and 'b' query parameters from req.query
  const { a, b } = req.query;

  // Parse the query parameters to integers and calculate the sum
  const result = parseInt(a) + parseInt(b);

  // Send the result back as a response
  res.send(`the sum is ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
