# Observability & Incident Testing System

A small DevOps-inspired project exploring deployment failures, rollback workflows, and AI-assisted incident summaries.

## Current Features
- Express.js backend service
- Health check endpoint
- GitHub version control
- Automatic Vercel deployment


## Goal
This project simulates real-world deployment incidents and explores:
- CI/CD deployment workflows
- Failure detection
- Incident debugging
- Observability concepts
- Discord alerts
- AI-generated deployment summaries
- Rollback automation concepts


## Endpoints

### Main Route
`/`           Returns basic service response.

### Health Check
`/health`     Returns service status for monitoring.


## Failure Simulation System

The application includes a controlled incident simulation endpoint for testing operational behavior and observing runtime responses.

### Incident Endpoint

`/trigger-error?type=<failure_type>`

Supported failure types:

| Failure Type | Description |
|---|---|
| runtime_error | Simulates an application runtime exception |
| timeout | Simulates delayed response / latency |
| memory_spike | Simulates increased memory allocation |
| dependency_failure | Simulates upstream service failure |

### Example Requests
```javascript
/trigger-error?type=runtime_error

/trigger-error?type=timeout

/trigger-error?type=memory_spike

/trigger-error?type=dependency_failure
```

### Validation

Unsupported failure types return:

- HTTP 400 status
- valid failure type suggestions

Example invalid request:

```javascript
/trigger-error?type=banana
```

### Structured Incident Logging

Each simulated incident generates structured metadata including:

- failure type
- timestamp
- severity
- affected route

This creates a lightweight sandbox for exploring observability and incident-response concepts.


## Tech Stack
- Node.js
- Express.js
- GitHub
- Vercel


## System Flow

Local Development → GitHub → Vercel → Production


## Planned Features
- Simulated deployment failures
- Controlled incident endpoints
- Structured logging
- Discord webhook alerts
- AI-assisted incident summaries
- Rollback workflow visualization


## Purpose

A sandbox for understanding: 

- how production systems fail
- how deployments propagate changes
- how incidents are observed and debugged
- how rollback systems conceptually work
