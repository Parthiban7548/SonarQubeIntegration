import express from "express";

const app = express();

let count = 0;

function greet(name) {
  console.log(`Hello ${name}`);
}

if (count === 0) {
  console.log("Count is zero");
}

function processData(data) {
  if (data) {
    console.log("Processing data...");
  }
}


app.get("/", (req, res) => {
  greet("Parthi");
  processData(count);
  res.send("Hello SonarQube");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});