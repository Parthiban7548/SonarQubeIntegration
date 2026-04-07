import express from "express";

const app = express();

let count test = 0;
const test_string = "Parthiban"
function greet(name) {
  console.log(`Hello ${name}`);
}

if (count === 0) {
  console.log("Count is zero");
}

function processData(data) {
  if (data > 0 && data < 100) {
    console.log("Valid data");
  }
}

function checkData(data) {
  if (data) {
    console.log("Data exists");
  }
}

app.get("/", (req, res) => {
  greet("Parthi");
  processData(count);
  checkData(count);
  res.send("Hello SonarQube");
});

app.listen(3000);