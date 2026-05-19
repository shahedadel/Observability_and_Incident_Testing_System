const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// If everything is working correctly, this is what users should see
app.get("/", (req, res) => {
  res.send("System Running Normally - No Incidents Detected");
});

// Health check. NOT for users, but for monitoring tools to check if the service is up and running
// Purpose: confirm that the service is operational and can respond to requests, even if it's not functioning perfectly. 
// This helps in monitoring the overall health of the application and can trigger alerts if the service is down or unresponsive.
app.get("/health", (req, res) => {
   res.json({
    status: "ok",
    service: "ai-rollback-demo"
  });
});

// controlled incident. This endpoint simulates a runtime failure by throwing an error when accessed.
// Vercel catches it at runtime. User sees "500 Internal Server Error" and Vercel logs the error details for debugging and monitoring purposes.
app.get("/trigger-error", (req, res) => {
  throw new Error("Simulated incident: runtime failure");
});

// This keeps the server running and listens for incoming requests on the specified port. 
// When the server starts successfully, it logs a message to the console indicating that it's running and on which port.
app.listen(PORT, () => {
  console.log("Server running");
});