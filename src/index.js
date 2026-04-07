import express, { Request, Response } from "express";

const app = express();


let count = 0;


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


function checkData(data ) {
  if (data) {
    console.log("Data exists");
  }
}


const password = process.env.APP_PASSWORD || "";


try {
  throw new Error("Test error");
} catch (e) {
  console.error("Error occurred:", e);
}


function logData(data) {
  console.log(data);
}

function validateData(data) {
  if (data > 10) console.log("greater");
  if (data < 5) console.log("smaller");
}

function printNumbers() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}


app.get("/", (req, res) => {
  greet("Parthi");
  processData(count);
  checkData(count);

  logData(count);
  validateData(count);
  printNumbers();

  res.send("Hello SonarQube");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});