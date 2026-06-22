# AI Rollback Demo - Dev Log

## Day 1 -- System Setup + Deployment Pipeline

### Goal
Deploy a simple Express.js service and prepare it for failure simulation workflows.

---

## Node.js Setup

Installed:
- Node.js LTS

Verification:
```powershell
node -v
npm -v
```

Issue encountered:
- PowerShell blocked npm scripts due to execution policy restrictions.

Fix:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
What I learned: Local environment setup can block development before any code is even written.

Notes:
- Node worked immediately after installation.
- npm required PowerShell permissions adjustment.

---

## Express App Setup

Created project:
```powershell
mkdir deployment-demo
cd deployment-demo
npm init -y
npm install express
```

Created:
- server.js

Features:
- root endpoint
- health endpoint

---

## Git Setup

Installed Git and configured inital workflow.

Important installation choices:
- VS Code as default editor
- main as default branch
- bundled OpenSSH
- OpenSSL library
- Windows default console

Issue encountered:
- Git was not recognized in PowerShell.

Cause:
- Git path was missing from environment variables.

Fix:
Added:
```txt
C:\Program Files\Git\cmd
```

to system PATH.

What I learned: Installation is not enough. Environment configuration determines usability.
---

## Git Ignore Learning Moment

Accidentally staged:
- node_modules/

Learned:
- dependencies should not be version controlled
- .gitignore prevents tracking generated files

Created:
```txt
.gitignore
```

Contents:
```txt
node_modules/
```

---

## GitHub Push

Issue encountered:
- GitHub rejected password authentication.

Learned:
- GitHub now requires Personal Access Tokens (PATs).

Fix:
- generated PAT
- used token instead of password during git push

---

## Deployment

Platform:
- Vercel

Project name:
- ai-rollback-demo

Deployment status:
- successful

Live URL:
- https://ai-rollback-demo.vercel.app/

Learned:
- deployments require dynamic ports

Updated:
```javascript
const PORT = process.env.PORT || 3000;
```
What I learned: Cloud environments do not behave like local servers. Ports are dynamically assigned.

---

## Current System State:

Local code → GitHub → Vercel → Production


## Current Thoughts

- Deployment infrastructure is more complex than coding itself.
- Git and environment setup caused more friction than Express.
- CI/CD concepts make more sense after seeing automatic deployment happen live.

Next Steps:
- introduce controlled failure endpoints
- analyze runtime logs in Vercel
- simulate incidents intentionally
- add observability (structured logging)
- explore rollback workflows
- integrate AI-generated incident summaries


## Day 2 -- Controlled Incident Simulation

### Goal
Move from random application crashes to structured, controllable failure modeling.

---

## Failure Taxonomy

Implemented categorized incident simulation types:

- runtime_error
- timeout
- memory_spike
- dependency_failure

What I learned: Production failures are not all the same. Different failure classes represent different operational behaviors and debugging strategies.

---

## Dynamic Incident Triggering

Added query-parameter-based incident selection:
```javascript
/trigger-error?type=timeout
/trigger-error?type=memory_spike
/trigger-error?type=runtime_error
/trigger-error?type=dependency_failure
```

Instead of hardcoding one failure into the application, the system can now simulate different incident types dynamically through the URL.

## Structured Incident Objects

Added structured incident metadata:

```javascript
  "type": "runtime_error",
  "route": "/trigger-error",
  "severity": "high",
  "timestamp": "ISO timestamp"
```

Structured logging creates consistency for monitoring systems and future observability tooling.

## Input Validation

Added validation for unsupported failure types.

Invalid requests now return:

- HTTP 400
- supported failure categories

Example invalid request:

/trigger-error?type=banana

I did this because operational systems should reject invalid states predictably instead of failing silently.

## Summary of what was completed:

- controlled failure endpoints
- failure types system
- structured incident objects
- basic logging 

## Day 3 -- Incident Tracking and Observability

### Added
- in-memory incident storage
- /incidents endpoint
- incident history retrieval
- runtime exception testing

### Learned
- failures should be recorded before they occur
- stack traces identify the exact crash location
- observability requires historical data, not just live logs

  
## Next Steps:
- add request logging
- add basic failure metrics tracking
- add incident filtering by type
- simulate additional failure scenarios
- integrate Discord webhook alerts
- experiment with AI-generated incident summaries
- simulate deployment rollback workflows

