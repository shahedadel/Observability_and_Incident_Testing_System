const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const incidents = [];

// Failure types:
const FAILURE_TYPES = {
  RUNTIME_ERROR: "runtime_error",
  TIMEOUT: "timeout",
  MEMORY_SPIKE: "memory_spike",
  DEPENDENCY_FAILURE: "dependency_failure",
};


// If everything is working correctly, this is what users should see
app.get("/", (req, res) => {
  res.send("System Running Normally - No Incidents Detected");
});


// Health check endpoint used by monitoring systems to verify service availability and responsiveness
app.get("/health", (req, res) => {
   res.json({
    status: "ok",
    service: "ai-rollback-demo"
  });
});

app.get("/trigger-error", (req, res) => {
  // choose failure type based on query parameter, default to runtime failure if not specified
  const failureType = req.query.type || FAILURE_TYPES.RUNTIME_ERROR;

  if (!Object.values(FAILURE_TYPES).includes(failureType)) {
    return res.status(400).json({
      error: "Invalid failure type",
      validTypes: Object.values(FAILURE_TYPES)
    });
  }

  // structured incident object to log the failure details
  const incident = {
    type: failureType,
    route: "/trigger-error",
    timestamp: new Date().toISOString(),
    details: `Simulated ${failureType} for testing purposes`,
    severity: "high"
  };

  // store incident
  incidents.push(incident);
  
  // Log the incident details to the console for monitoring and debugging
  console.log("INCIDENT LOG:");
  console.log(JSON.stringify(incident, null, 2));   // used .stringify to format the log output for better readability in the console

  // simulate actual failure behavior based on the failure type
  if (failureType === FAILURE_TYPES.RUNTIME_ERROR) {
    throw new Error("Simulated runtime error");
  }

  if (failureType === FAILURE_TYPES.TIMEOUT) {
    // Simulates latency/timeout behavior seen in overloaded systems
    setTimeout(() => {
      res.send("This response is delayed to simulate a timeout");
      }, 10000); // 10 seconds delay to simulate timeout
    
      return; // exit early to avoid sending multiple responses
    }

  if (failureType === FAILURE_TYPES.MEMORY_SPIKE) {
    // Simulate a memory spike by creating a large array
    const largeArray = new Array(1e5).fill("memory spike");
    res.json({
      message: "Simulated memory spike",
      allocatedItems: largeArray.length
    });
    return; // exit early to avoid sending multiple responses
  }

  if (failureType === FAILURE_TYPES.DEPENDENCY_FAILURE) {
    // Simulate a dependency failure by attempting to call an external service that doesn't exist
    res.status(503).send("Simulated dependency failure. Unable to reach external service");
    return; // exit early to avoid sending multiple responses
  }

  // Default response if no specific failure type is matched
  res.send("Simulated failure triggered");
});

app.get("/incidents", (req, res) => {
  res.json({
    count: incidents.length, 
    incidents: incidents})
  }
);

// This keeps the server running and listens for incoming requests on the specified port. 
// When the server starts successfully, it logs a message to the console indicating that it's running and on which port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


