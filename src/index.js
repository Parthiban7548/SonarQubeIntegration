import express from "express";

const app = express();

// ❌ 1. using var (bad practice)
var count: any = 0;

// ❌ 2. unused variable
let unusedVar = "not used";

// ❌ 3. duplicate code
function greet(name: string) {
  console.log("Hello " + name);
}

function greetDuplicate(name: string) {
  console.log("Hello " + name); // duplicate logic
}

// ❌ 4. wrong comparison
if (count == "0") {
  console.log("Count is zero");
}

// ❌ 5. nested condition (complexity issue)
function processData(data: any) {
  if (data) {
    if (data > 0) {
      if (data < 100) {
        console.log("Valid data");
      }
    }
  }
}

// ❌ 6. duplicate condition
function checkData(data: any) {
  if (data) {
    console.log("Data exists");
  }
  if (data) {
    console.log("Data exists again");
  }
}

// ❌ 7. hardcoded secret (security issue)
const password = "123456";

// ❌ 8. empty catch block
try {
  throw new Error("Test error");
} catch (e) {}

// ❌ 9. function with too many responsibilities
function bigFunction(data: any) {
  console.log(data);
  if (data) console.log("data exists");
  if (data > 10) console.log("greater");
  if (data < 5) console.log("smaller");
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

app.get("/", (req, res) => {
  greet("Parthi");
  greetDuplicate("Parthi");
  processData(count);
  checkData(count);
  bigFunction(count);
  res.send("Hello SonarQube");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});