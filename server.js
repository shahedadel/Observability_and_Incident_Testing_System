const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("System Running Normally - No Incidents Detected");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/trigger-error", (req, res) => {
  throw new Error("Simulated incident");
});

app.listen(PORT, () => {
  console.log("Server running");
});