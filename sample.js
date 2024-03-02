const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
app.use(router);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
