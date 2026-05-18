const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Deployment Demo App Running 🚀");
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