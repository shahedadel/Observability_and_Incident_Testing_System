# AI Rollback Demo

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