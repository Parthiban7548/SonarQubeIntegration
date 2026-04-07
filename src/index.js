import express from "express";

const app = express();

const PORT = 3000;
let count = 0;

// Use template literals properly
function greet(name) {
  console.log(`Hello ${name}`);
}

// Proper comparison
if (count === 0) {
  console.log("Count is zero");
}

// Avoid duplicate conditions
function processData(data) {
  if (data > 0 && data < 100) {
    console.log("Valid data");
  } else {
    console.log("Invalid data");
  }
}

// Clean condition check
function checkData(data) {
  if (data !== null && data !== undefined) {
    console.log("Data exists");
  }
}

app.get("/", (req, res) => {
  greet("Parthi");

  processData(count);
  checkData(count);

  res.send("Hello SonarQube");
});

// Single listen with callback
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});