const express = require("express");
const app = express();
const events = require("events");
const path = require("path");
const fs = require("fs");
const Myemitter = new events();

app.set("view engine", "ejs");

// Set the directory where views are located
app.set("views", path.join(__dirname, "views"));

// Define an array of names
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Harry",
  "Ivy",
  "Jack",
];

app.get("/names", (req, res) => {
  // Array to store person objects
  const people = [];

  // Iterate over each name in the array
  names.forEach((name, index) => {
    // Create a person object for each name
    const person = { name: name, people: "jole mathew" };

    // Push the person object to the people array
    people.push(person);

    // Delay rendering each person by 1 second * index
    setTimeout(() => {
      console.log(person);
      // Render the "home" template with the people array and the current name
      res.render("home", { persons: people, currentName: name });
    }, 1000 * index);
  });
});
app.get("/", (req, res) => {
  // Assuming you have an array of names
  const names = ["John", "Alice", "Bob"];

  res.render("home", { names: names }); // Pass the names array to the home.ejs template
});
 
app.listen(3002, () => {
  console.log(`The server is listening on port ${3002}`);
});
