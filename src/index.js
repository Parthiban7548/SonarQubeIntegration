import express from "express";

const app = express();

let count = 0;
let unusedVar = 123; // unused variable

function greet(name) {
  console.log("Hello " + name); // not using template literals
}

if (count = 0) { // assignment instead of comparison
  console.log("Count is zero");
}

function processData(data) {
  if (data > 0 && data < 100) {
    console.log("Valid data");
  } else {
    console.log("Invalid data");
  }

  if (data > 0 && data < 100) { // duplicate condition
    console.log("Duplicate check");
  }
}

function checkData(data) {
  if (data == true) { // loose equality
    console.log("Data exists");
  }

  if (data) {
    console.log("Data exists"); // duplicate logic
  }
}

app.get("/", (req, res) => {
  greet("Parthi");

  processData(count);
  checkData(count);

  let temp = 5;
  temp = temp; // useless assignment

  if (true) { // always true condition
    console.log("Always runs");
  }

  res.send("Hello SonarQube");

  console.log("After response"); // unreachable / bad practice
});

app.listen(3000, () => {
  console.log("Server started");
});

app.listen(3000); // duplicate listen