import express from "express";

const app = express();

// ❌ using var (bad practice)
var count: any = 0;

// ❌ unused variable
let unusedVar = "I am not used";

// ❌ duplicate function
function greet(name: string) {
  console.log("Hello " + name);
}

function greetDuplicate(name: string) {
  console.log("Hello " + name); // duplicate logic
}

// ❌ bad comparison
if (count == "0") {
  console.log("Count is zero");
}

// ❌ function with too many responsibilities
function processData(data: any) {
  console.log("Processing data...");
  if (data) {
    console.log("Data exists");
  }
  if (data) {
    console.log("Data exists again"); // duplicate condition
  }
}

// ❌ hardcoded credentials (security issue)
const password = "123456";

app.get("/", (req, res) => {
  greet("Parthi");
  processData(count);
  res.send("Hello SonarQube");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});