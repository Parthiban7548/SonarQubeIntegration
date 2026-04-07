import express from "express";

const app = express();

// ❌ bad practice (var)
var count: any = 0;

// ❌ unused variable
let unused = "not used";

// ❌ duplicate code
function greet(name: string) {
  console.log("Hello " + name);
}

function greet2(name: string) {
  console.log("Hello " + name);
}

// ❌ wrong comparison
if (count == "0") {
  console.log("Count is zero");
}

// ❌ nested condition (complex)
function processData(data: any) {
  if (data) {
    if (data > 0) {
      if (data < 100) {
        console.log("Valid");
      }
    }
  }
}

// ❌ duplicate condition
function checkData(data: any) {
  if (data) {
    console.log("Data exists");
  }
  if (data) {
    console.log("Data exists again");
  }
}

// ❌ hardcoded secret
const password = "123456";

// ❌ empty catch
try {
  throw new Error("error");
} catch (e) {}

app.get("/", (req, res) => {
  greet("test");
  greet2("test");
  processData(count);
  checkData(count);
  res.send("Hello");
});

app.listen(3000);