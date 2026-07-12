# EquiLens AI

> AI-Powered Equity Research Platform for Evidence-Based Investment Analysis

EquiLens AI is a full-stack AI application that helps users research publicly traded companies using financial statements, company fundamentals, competitor intelligence, recent market news, and AI-powered reasoning.

Unlike stock prediction systems, EquiLens AI focuses on collecting evidence from multiple reliable sources and generating a structured investment research report that supports informed decision making.

---

## Live Demo

Frontend

https://ai-investment-research-agent-nine-beta.vercel.app

Backend API

https://ai-investment-research-agent-sp9f.onrender.com

---

# Features

### Company Research

- Company search by name or ticker
- Intelligent company resolution
- Ambiguous company selection workflow

### Financial Analysis

- Company profile
- Income statements
- Balance sheets
- Cash flow statements
- Financial ratios
- Financial growth metrics

### Market Intelligence

- Latest company news
- Competitor discovery
- Industry information

### AI Investment Analysis

Gemini 2.5 Flash evaluates collected evidence and generates

- Executive Summary
- Investment Recommendation
- Confidence Score
- Evidence Completeness
- Key Strengths
- Key Risks

### Professional Report

- PDF investment report generation
- One-click download
- Structured professional layout

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Axios
- CSS (Inline Styling)

## Backend

- Node.js
- Express
- TypeScript

## AI

- Google Gemini 2.5 Flash

## Financial Data

- Financial Modeling Prep (FMP)

## Search & News

- Tavily Search API

## PDF Generation

- PDFKit

## Deployment

Frontend

- Vercel

Backend

- Render

---

# System Architecture

```
                   React + Vite Frontend
                           │
                           ▼
                  Express REST API
                           │
                    LangGraph Workflow
                           │
                 Investment Research Agent
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
 Company Service     Financial Service   News Service
        │                  │                  │
        └──────────────┬───┴──────────────┬───┘
                       ▼                  ▼
            Financial Modeling Prep     Tavily
                       │
                       ▼
                 Gemini 2.5 Flash
                       │
                       ▼
             Investment Research Report
```

---

# Project Structure

```
ai-investment-research-agent
│
├── backend
│   ├── src
│   │   ├── agents
│   │   ├── api
│   │   ├── domain
│   │   ├── graph
│   │   ├── infrastructure
│   │   ├── providers
│   │   ├── services
│   │   ├── tools
│   │   └── server.ts
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   ├── types
│   │   └── utils
│
├── docs
│
└── README.md
```

---

# Application Workflow

```
User
   │
   ▼
Search Company
   │
   ▼
Company Resolution
   │
   ▼
Collect Financial Evidence
   │
   ├── Company Profile
   ├── Financial Statements
   ├── Ratios
   ├── Growth Metrics
   ├── News
   └── Competitors
            │
            ▼
 Gemini AI Investment Analysis
            │
            ▼
 Structured Investment Report
            │
            ▼
     Download PDF Report
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/nallurinithin/ai-investment-research-agent.git

cd ai-investment-research-agent
```

---

## Backend

```bash
cd backend

npm install
```

Create

```
.env
```

```
PORT=3000

FMP_API_KEY=YOUR_KEY
FMP_BASE_URL=https://financialmodelingprep.com/stable

TAVILY_API_KEY=YOUR_KEY

GEMINI_API_KEY=YOUR_KEY
```

Run

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend

npm install
```

Create

```
.env
```

```
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

Run

```bash
npm run dev
```

---

# Production Deployment

Frontend

- Vercel

Backend

- Render

---

# Design Principles

The project was built using several software engineering principles.

- Architecture First
- Separation of Concerns
- Single Responsibility Principle
- Domain Driven Folder Structure
- Layered Architecture
- Provider Abstraction
- Evidence-First AI Design
- Incremental Vertical Slice Development
- Type Safety with TypeScript

---

# Current Capabilities

- Company search
- AI investment analysis
- Executive summary
- Recommendation engine
- Evidence completeness scoring
- Financial snapshots
- Competitor analysis
- News analysis
- PDF report generation
- Responsive dashboard
- Production deployment

---

# Future Improvements

- Historical trend visualizations
- Interactive financial charts
- User authentication
- Watchlists
- Portfolio tracking
- Caching layer
- Streaming AI responses
- Multi-company comparison

---

# Disclaimer

EquiLens AI is designed for educational and research purposes.

The recommendations generated by the AI model should not be interpreted as financial advice or investment recommendations. Users should perform their own due diligence before making investment decisions.

---

# Author

**Nithin Nalluri**

AI Product Development Engineer Project

GitHub

https://github.com/nallurinithin

---