const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  throw new Error("Intentional runtime crash for incident simulation");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "deployment-demo"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});