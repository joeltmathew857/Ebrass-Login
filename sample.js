const express = require("express");
const fs = require("fs");
const app = express();
const ejs = require("ejs");

// Set EJS as the view engine
app.set("view engine", "ejs");

const firstname = "joel thomas mathew";
const seocndname = "leo messi";
const thridname = "neymar";

const data = [
  { id: 1, name: firstname },
  { id: 2, name: seocndname },
  { id: 3, name: thridname },
];

const datas = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Peter Parker",
  },
];

app.get("/user/:id/:ids", (req, res) => {
  const Identfy = parseInt(req.params.id);
  const SEOCNDIden = parseInt(req.params.ids);
  const findss = datas.find((items) => SEOCNDIden === items.id);
  const FINDDATA = data.find((items) => Identfy === items.id);
  if (FINDDATA && findss) {
    const combinedData = { firstdata: FINDDATA.name, seconddata: findss.name };
    res.send(`the name is ${JSON.stringify(combinedData)}`);
    // res.render("vaild", { total: JSON.stringify(FINDDATA) });
  } else {
    res.send(`the data is not  found`);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
