# AI Rollback Demo - Dev Log

## Day 1

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

Installed Git.

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

---

## Current Thoughts

Interesting observations:
- Deployment infrastructure is more intimidating than coding itself.
- Git and environment setup caused more friction than Express.
- CI/CD concepts make more sense after seeing automatic deployment happen live.

Next Steps:
- intentionally break deployment
- analyze logs
- connect Discord alerts
- generate AI incident summaries
