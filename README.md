# EquiLens AI

> **AI-Powered Equity Research Platform for Evidence-Based Investment Analysis**

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express](https://img.shields.io/badge/Express-5-black)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Gemini](https://img.shields.io/badge/LLM-Gemini%202.5%20Flash-orange)
![License](https://img.shields.io/badge/License-MIT-green)

EquiLens AI is an AI-powered equity research platform that helps investors perform evidence-based company analysis using publicly available financial data, market news, competitor intelligence, and AI reasoning.

Instead of predicting stock prices, EquiLens AI follows an **evidence-first investment research approach**, where structured financial evidence is collected from multiple trusted sources before being analyzed by an LLM.

The platform generates a comprehensive investment research report containing:

- Executive Summary
- AI Investment Recommendation
- Confidence Score
- Evidence Completeness
- Company Fundamentals
- Financial Snapshot
- Competitor Analysis
- Market News Analysis
- Professional PDF Report

---

# Live Demo

### Frontend

> https://ai-investment-research-agent-nine-beta.vercel.app

### Backend API

> https://ai-investment-research-agent-sp9f.onrender.com

---

# Project Overview

Traditional AI investment assistants often rely primarily on large language models to answer financial questions. This approach may produce convincing responses but often lacks structured financial evidence.

EquiLens AI addresses this limitation by separating **information retrieval** from **AI reasoning**.

The platform first gathers structured evidence from multiple external sources, including financial statements, company profiles, competitor information, and recent market news. The collected evidence is then synthesized by Google Gemini 2.5 Flash to generate an explainable investment research report.

This architecture emphasizes transparency, reproducibility, and evidence-backed reasoning rather than speculative recommendations.

---

# Key Features

## Company Research

- Search companies using name or ticker
- Intelligent company resolution
- Ambiguous company selection workflow
- Comprehensive company profile retrieval

---

## Financial Analysis

- Income Statements
- Balance Sheets
- Cash Flow Statements
- Financial Ratios
- Financial Growth Metrics
- Company Fundamentals
- Revenue Analysis
- Profitability Indicators

---

## Market Intelligence

- Latest company news
- Competitor discovery
- Industry information
- News impact analysis

---

## AI Investment Analysis

Google Gemini 2.5 Flash generates:

- Executive Summary
- Investment Recommendation
- Confidence Score
- Evidence Completeness
- Key Strengths
- Key Risks
- Competitor Analysis
- Market News Analysis

---

## Professional Dashboard

- Modern glassmorphism interface
- Sidebar navigation
- Company Snapshot
- Financial Snapshot
- News Highlights
- Competitor Overview
- AI Recommendation Dashboard
- Downloadable PDF Report

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Axios
- CSS (Inline Styling)

---

## Backend

- Node.js
- Express
- TypeScript

---

## Artificial Intelligence

- Google Gemini 2.5 Flash

---

## Financial Data Provider

- Financial Modeling Prep (FMP)

---

## Search & News

- Tavily Search API

---

## PDF Generation

- PDFKit

---

## Deployment

### Frontend

- Vercel

### Backend

- Render

---

# High-Level Architecture

```text
                        User
                          │
                          ▼
                React + Vite Frontend
                          │
                          ▼
                 Express REST API
                          │
                          ▼
              Investment Research Graph
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
   Company Service  Financial Service  News Service
          │               │                │
          └───────────────┼────────────────┘
                          ▼
               Competitor Intelligence
                          ▼
                 Gemini 2.5 Flash LLM
                          ▼
            Investment Analysis Engine
                          ▼
           Recommendation Engine
                          ▼
           Markdown / PDF Report Builder
                          ▼
                 Investment Dashboard
```

---

# System Workflow

```text
User Search
     │
     ▼
Company Resolution
     │
     ▼
Financial Evidence Collection
     │
     ├── Company Profile
     ├── Financial Statements
     ├── Ratios
     ├── Growth Metrics
     ├── News
     └── Competitors
              │
              ▼
    AI Investment Analysis
              │
              ▼
 Recommendation Engine
              │
              ▼
 Structured Investment Report
              │
              ▼
 Professional Dashboard
              │
              ▼
      Download PDF Report
```

---

# Project Structure

```text
ai-investment-research-agent
│
├── backend
│   ├── src
│   │   ├── api
│   │   ├── domain
│   │   ├── graph
│   │   ├── infrastructure
│   │   ├── providers
│   │   ├── services
│   │   ├── shared
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   ├── types
│   │   ├── utils
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── docs
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_ROADMAP.md
│   └── ENGINEERING_JOURNAL.md
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/nallurinithin/ai-investment-research-agent.git

cd ai-investment-research-agent
```

---

# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=3000

FMP_API_KEY=YOUR_FMP_API_KEY

FMP_BASE_URL=https://financialmodelingprep.com/stable

TAVILY_API_KEY=YOUR_TAVILY_API_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend server.

```bash
npm run dev
```

The backend will start at

```
http://localhost:3000
```

---

# Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

Run the frontend.

```bash
npm run dev
```

The frontend will start at

```
http://localhost:5173
```

---

# Required API Keys

The project requires the following free API keys.

| Service | Purpose |
|---------|----------|
| Financial Modeling Prep | Financial statements and company data |
| Tavily Search | News retrieval |
| Google Gemini | AI investment analysis |

---

# Running the Application

After both servers are running:

1. Open the frontend in your browser.
2. Search for a company by name or ticker.
3. Wait while EquiLens AI retrieves financial evidence.
4. Review the generated investment analysis.
5. Download the PDF investment report.

---

# Production Deployment

The application has been deployed using modern cloud platforms.

## Frontend

Hosted on **Vercel**

```
https://ai-investment-research-agent-nine-beta.vercel.app
```

---

## Backend

Hosted on **Render**

```
https://ai-investment-research-agent-sp9f.onrender.com
```

---

# Environment Variables

## Backend

| Variable | Description |
|----------|-------------|
| PORT | Express server port |
| FMP_API_KEY | Financial Modeling Prep API key |
| FMP_BASE_URL | FMP API endpoint |
| TAVILY_API_KEY | Tavily API key |
| GEMINI_API_KEY | Google Gemini API key |

---

## Frontend

| Variable | Description |
|----------|-------------|
| VITE_API_BASE_URL | Backend REST API URL |

---

# Build Commands

## Backend

Development

```bash
npm run dev
```

Type Checking

```bash
npm run check
```

Production Build

```bash
npm run build
```

Start Production Server

```bash
npm start
```

---

## Frontend

Development

```bash
npm run dev
```

Type Checking

```bash
npm run build
```

Production Preview

```bash
npm run preview
```

---

# Deployment Architecture

```text
                   Vercel
                      │
                      ▼
             React + Vite Frontend
                      │
             REST API Requests
                      │
                      ▼
                 Render Backend
                      │
                      ▼
         Express + Investment Graph
                      │
      ┌───────────────┼────────────────┐
      ▼               ▼                ▼
 Financial Modeling   Tavily       Gemini 2.5
      Prep API       Search API      Flash
                      │
                      ▼
           Structured Investment Report
```

---

# How EquiLens AI Works

EquiLens AI follows an **evidence-first AI architecture**. Instead of asking an LLM to directly answer investment questions, the system first retrieves structured financial evidence from multiple reliable data providers and then uses the AI model to synthesize that evidence into a comprehensive investment research report.

This separation between **retrieval** and **reasoning** improves transparency, reduces hallucinations, and produces recommendations backed by verifiable financial information.

The complete workflow consists of the following stages.

---

## 1. Company Resolution

The user may search using either:

- Company Name (Apple)
- Stock Ticker (AAPL)

If a company name is provided, the Company Resolution Service searches Financial Modeling Prep and determines whether:

- A single company matches
- Multiple companies match
- No company exists

If multiple companies are found, the user is asked to choose the correct organization before continuing.

---

## 2. Financial Evidence Collection

Once the company has been resolved, the Financial Service retrieves structured evidence in parallel.

Collected evidence includes:

- Company Profile
- Income Statements
- Balance Sheets
- Cash Flow Statements
- Financial Ratios
- Financial Growth Metrics

All provider responses are normalized into internal domain models before being passed to the AI layer.

---

## 3. Market Intelligence Collection

The application then gathers qualitative information.

This includes:

- Latest company news
- Competitor information
- Industry context

Recent news articles are retrieved using Tavily Search, while competitor information is obtained using Financial Modeling Prep.

---

## 4. AI Investment Analysis

After collecting all available evidence, the Investment Research Agent prepares a structured prompt and sends the complete evidence package to Google Gemini 2.5 Flash.

The AI model analyzes:

- Business fundamentals
- Financial health
- Company strengths
- Company risks
- Market sentiment
- Competitor positioning

The model then generates a structured response containing:

- Executive Summary
- Investment Recommendation
- Confidence Score
- Strengths
- Risks
- News Impact
- Competitor Analysis

---

## 5. Recommendation Engine

Instead of relying solely on the LLM recommendation, EquiLens AI evaluates the completeness of the collected evidence.

The Recommendation Engine combines:

- AI Confidence
- Financial Evidence Availability

to compute an Evidence Completeness Score.

This additional validation step increases transparency and makes the recommendation process more deterministic.

---

## 6. Report Generation

Finally, the application generates:

- Interactive dashboard
- Professional PDF report

The report summarizes all collected evidence and AI analysis into a single investment research document suitable for further review.

---

# Software Architecture

The backend follows a layered architecture designed around separation of concerns.

```text
API Layer
      │
      ▼
Validation Layer
      │
      ▼
Investment Graph
      │
      ▼
Investment Research Agent
      │
      ▼
Business Services
      │
      ▼
External Providers
      │
      ▼
External APIs
```

Each layer has a single responsibility, making the system easier to maintain, extend, and test.

---

# Engineering Decisions

Several architectural decisions were made during development to improve maintainability and scalability.

---

## Why TypeScript?

TypeScript provides compile-time type safety, reducing runtime errors and making the codebase easier to maintain as the application grows.

Strong typing also simplifies communication between backend services and frontend components.

---

## Why React?

React enables component-based UI development.

Reusable components allowed the dashboard to be organized into independent sections such as:

- Recommendation
- Executive Summary
- Company Snapshot
- Financial Snapshot
- News
- Competitors

This structure simplified future UI enhancements.

---

## Why Express?

Express provides a lightweight and flexible framework suitable for REST APIs.

The backend architecture remains independent of Express, making future migration to another framework relatively straightforward.

---

## Why Google Gemini 2.5 Flash?

Gemini 2.5 Flash was selected because it offers:

- High-quality reasoning
- Structured JSON generation
- Fast inference
- Generous free-tier limits

These characteristics make it well suited for an investment research assistant.

---

## Why Financial Modeling Prep?

Financial Modeling Prep provides multiple financial datasets through a single API.

This includes:

- Company profiles
- Financial statements
- Ratios
- Growth metrics
- Competitor information

Using a single provider reduced integration complexity while maintaining good data coverage.

---

## Why Tavily Search?

Many news APIs only provide metadata.

Tavily retrieves actual article content, enabling the AI model to analyze complete news articles rather than only headlines.

---

## Why an Evidence-First Architecture?

A key design goal of the project was to reduce hallucinations.

Instead of allowing the LLM to generate unsupported financial opinions, the system first retrieves structured evidence and then instructs the AI model to reason only over the supplied information.

This improves explainability and transparency.

---

# Design Principles

The following engineering principles guided the implementation.

- Architecture First
- Separation of Concerns
- Single Responsibility Principle
- Layered Architecture
- Provider Abstraction
- Domain Normalization
- Incremental Vertical Slice Development
- Type Safety
- Reusable UI Components
- Documentation Before Scaling

---

# Key Trade-offs

Like any engineering project, Version 1 intentionally prioritizes core functionality over additional features.

The following capabilities were intentionally excluded to keep the first release focused.

## Excluded Features

- User Authentication
- Database Persistence
- Watchlists
- Portfolio Tracking
- Historical Stock Charts
- Interactive Financial Graphs
- Background Job Processing
- Caching Layer
- Multi-company Comparison
- Streaming AI Responses

These features remain good candidates for future versions but were outside the scope of the initial release.

---

# Lessons Learned

Building EquiLens AI provided valuable experience in designing and implementing a complete AI-powered software system.

Key learnings include:

- Designing scalable backend architectures
- Structuring AI workflows using evidence-first reasoning
- Integrating multiple external APIs
- Building reusable frontend components
- Managing type-safe communication between frontend and backend
- Deploying full-stack applications to production
- Writing maintainable and modular TypeScript code
- Applying incremental software engineering practices throughout development

---
# Example Runs

The following examples demonstrate the end-to-end workflow of EquiLens AI on different publicly traded companies.

---

## Example 1 — Apple (AAPL)

**Input**

```
Apple
```

**Output**

- Company Resolution
- Financial Statement Analysis
- Company Profile
- Competitor Analysis
- Market News Analysis
- Executive Summary
- Investment Recommendation
- Downloadable PDF Report

**Screenshots**

> `examples/Apple.png`

**Generated Report**

> `examples/Apple_Report.pdf`

---

## Example 2 — Microsoft (MSFT)

**Input**

```
Microsoft
```

**Output**

- Executive Summary
- Financial Snapshot
- Strengths & Risks
- Competitor Analysis
- News Highlights
- Investment Recommendation

**Screenshots**

> `examples/Microsoft.png`

**Generated Report**

> `examples/Microsoft_Report.pdf`

---

## Example 3 — Tesla (TSLA)

**Input**

```
Tesla
```

**Output**

- Company Analysis
- AI Recommendation
- Evidence Completeness
- Financial Analysis
- Downloadable PDF Report

**Screenshots**

> `examples/Tesla.png`

**Generated Report**

> `examples/Tesla_Report.pdf`

---

# Future Improvements

Although Version 1 delivers a complete investment research workflow, several enhancements can further improve the platform.

## AI

- Multi-agent architecture
- Industry-specific prompts
- Better reasoning with historical trends
- Streaming AI responses

---

## Financial Analysis

- Interactive financial charts
- Historical trend analysis
- Discounted Cash Flow (DCF) valuation
- Relative valuation models
- Technical indicators

---

## User Experience

- User authentication
- Saved reports
- Watchlists
- Portfolio tracking
- Dark/Light themes
- Mobile responsiveness improvements

---

## Backend

- Redis caching
- Background job processing
- API rate limiting
- Request logging
- Monitoring & analytics

---

## Deployment

- Docker support
- CI/CD pipeline
- Automated testing
- Kubernetes deployment

---

# Documentation

Additional project documentation is available in the `docs` directory.

| Document | Description |
|-----------|-------------|
| ARCHITECTURE.md | Overall backend architecture and workflow |
| DEVELOPMENT_ROADMAP.md | Development milestones and project roadmap |
| ENGINEERING_JOURNAL.md | Engineering decisions, implementation progress, and sprint journal |

---

# LLM Usage During Development

This project was developed with the assistance of **ChatGPT (GPT-5.5)** as an engineering companion throughout the software development lifecycle.

The LLM was used to assist with:

- Software architecture planning
- API selection and evaluation
- Backend workflow design
- Frontend component architecture
- TypeScript implementation
- Debugging
- Deployment guidance
- Documentation preparation
- Engineering journal maintenance

Rather than generating the complete application automatically, development followed an incremental engineering process.

Each feature was:

1. Planned
2. Designed
3. Implemented
4. Reviewed
5. Tested
6. Documented

before progressing to the next milestone.

The engineering journal included with this submission documents the complete development journey and architectural decisions.

---

# Assignment Deliverables

This submission includes:

- Complete frontend source code
- Complete backend source code
- Engineering documentation
- Architecture documentation
- Development roadmap
- Example application outputs
- Generated PDF reports
- README
- LLM development documentation

---

# Disclaimer

EquiLens AI is intended for **educational and research purposes only**.

The generated recommendations are based on publicly available information and AI-assisted analysis. They should **not** be interpreted as financial, legal, or investment advice.

Users should always perform their own due diligence and consult qualified financial professionals before making investment decisions.

---

# Acknowledgements

This project uses the following services and open-source technologies.

- React
- TypeScript
- Express
- Vite
- Google Gemini 2.5 Flash
- Financial Modeling Prep
- Tavily Search
- PDFKit
- Render
- Vercel

Special thanks to the creators and maintainers of these technologies.

---

# Author

**Nithin Nalluri**

AI Product Development Engineer Assignment

GitHub

https://github.com/nallurinithin

---

# Project Status

## Version

**Version 1.0**

## Status

**Production Ready**

✔ Full-Stack Application

✔ AI-Powered Investment Research

✔ Public Deployment

✔ End-to-End Tested

✔ Documentation Complete

✔ Assignment Submission Ready

---

If you found this project interesting, feel free to explore the source code, review the architecture, or try the live demo.