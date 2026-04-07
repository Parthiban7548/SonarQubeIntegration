import express from "express";

const app = express();function 
app.get("/", (req, res) => {
  res.send("Hello SonarQube");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});