# System Architecture

## Overview

The AI Investment Research Agent is a production-oriented AI application that assists users in evaluating whether purchasing the stock of a publicly traded company appears to be a good long-term investment.

Instead of relying solely on an LLM, the system follows an evidence-first architecture where external data is collected, normalized, and then analyzed by the AI before producing a recommendation.

---

# Architecture Goals

The architecture is designed around the following principles:

- Separate data retrieval from AI reasoning.
- Keep external providers replaceable.
- Use normalized internal models instead of provider-specific schemas.
- Build modular services with single responsibilities.
- Use LangGraph to orchestrate the AI workflow.
- Use LangChain for LLM interaction, prompt management, structured outputs, and tool integration.
- Provide transparent, explainable recommendations.

---
# High-Level Architecture

```text
                               User
                                 │
                                 ▼
                       Company Resolver
                 (Input Resolution Layer)
                                 │
                   ┌─────────────┴─────────────┐
                   │                           │
            Single Match               Multiple Matches
                   │                           │
                   ▼                           ▼
     Continue Workflow          Ask User to Select
                   │
                   ▼
        LangGraph Workflow Engine
                   │
      ┌────────────┼─────────────┬─────────────┬─────────────┐
      ▼            ▼             ▼             ▼
 Company Data  Financial Data  Market Data  News Service
    Service        Service       Service
      │              │             │             │
      ▼              ▼             ▼             ▼
 FMP + Tavily        FMP           FMP         Tavily

                   ▼
       Competitor Data Service
                   │
                   ▼
             FMP + Tavily

                   ▼
       Normalized Domain Models

                   ▼
        Investment Research Agent
             (Reasoning Layer)

                   │
      LangChain Prompt + Tools
                   │
                   ▼
          Gemini 2.5 Flash LLM

                   ▼
      Structured Investment Report
```

---

# Request Lifecycle

Every request follows the same sequence:

1. User enters a company name or ticker symbol.
2. Company Resolver validates and resolves the company.
3. Company Data Service retrieves company information.
4. Financial Data Service retrieves financial statements and ratios.
5. Market Data Service retrieves valuation and stock information.
6. News Service retrieves recent developments.
7. Competitor Data Service retrieves competitor information.
8. All responses are normalized into internal domain models.
9. Investment Research Agent combines the evidence.
10. Gemini 2.5 Flash performs reasoning.
11. A structured investment report is returned to the frontend.

---

# Layered Architecture

```text
Presentation Layer
        │
        ▼
Investment Research Agent
        │
        ▼
Application Services
        │
        ▼
Normalization Layer
        │
        ▼
External Providers
```

---

# Component Responsibilities

## Investment Research Agent

Responsibilities:

- Coordinate the workflow.
- Call application services.
- Handle partial failures.
- Combine normalized evidence.
- Perform AI reasoning.
- Generate the final recommendation.

The Agent never communicates directly with external APIs.

---

## Company Data Service

Responsibilities:

- Resolve company identity.
- Retrieve company profile.
- Retrieve business information.
- Return normalized company models.

External Providers:

- Financial Modeling Prep
- Tavily

---

## Financial Data Service

Responsibilities:

- Retrieve financial statements.
- Retrieve profitability metrics.
- Retrieve debt and cash flow information.
- Return normalized financial models.

External Provider:

- Financial Modeling Prep

---

## Market Data Service

Responsibilities:

- Retrieve stock price.
- Retrieve valuation metrics.
- Retrieve market capitalization.
- Return normalized market models.

External Provider:

- Financial Modeling Prep

---

## News Service

Responsibilities:

- Retrieve recent news.
- Retrieve major events.
- Retrieve sentiment-related information.
- Return normalized news models.

External Provider:

- Tavily

---

## Competitor Data Service

Responsibilities:

- Discover competitors.
- Retrieve competitor financial information.
- Retrieve industry context.
- Return normalized competitor models.

External Providers:

- Financial Modeling Prep
- Tavily

---

# Company Resolution Workflow

Before any analysis begins, the system resolves the company.

```text
User

↓

Company Resolver

↓

Resolved Company

↓

Investment Research Agent
```

Detailed Flow:

```text
                 User
                   │
                   ▼
         Company Resolver
     (Name / Ticker Resolution)
                   │
        ┌──────────┴──────────┐
        │                     │
   One Match            Multiple Matches
        │                     │
        ▼                     ▼
 Continue Analysis     Ask User to Select
        │
        ▼
Investment Research Agent
```

The resolver ensures the AI always analyzes the correct publicly traded company.

---

# External Technology Stack

# External Technology Stack

| Layer | Technology | Responsibility |
|--------|------------|----------------|
| Frontend | React + Next.js | User interface |
| Backend | Node.js + Express | API and application server |
| Workflow Orchestration | LangGraph | Coordinates workflow execution and shared state |
| LLM Framework | LangChain | Prompt templates, tool integration, structured outputs, Gemini interaction |
| LLM | Gemini 2.5 Flash | Investment reasoning |
| Financial Data | Financial Modeling Prep | Company, financial, and market data |
| Search | Tavily | Company research and web search |
| News | Tavily Search | Recent news retrieval |

---

# Data Flow

```text
External APIs
↓
Normalization
↓
Domain Models
↓
Investment Research Agent
↓
Gemini 2.5 Flash
↓
Investment Report
```

The LLM never receives raw API responses.

---

# Error Handling Strategy

The architecture supports graceful degradation.

Example:

```text
Company Data      ✓

Financial Data   ✓

Market Data      ✓

News             ✗

Competitors      ✓
```

The Agent still produces a recommendation while clearly informing the user that some evidence could not be retrieved.

---

# Design Principles

## Separation of Concerns

Services retrieve data.

The Agent performs reasoning.

---

## Provider Independence

The application depends on normalized domain models rather than provider-specific schemas.

---

## Single Responsibility

Each service owns one business capability.

---

## Evidence Before Reasoning

The LLM reasons only after all available evidence has been collected.

---

## Structured Outputs

All services return normalized objects.

The Agent produces a structured investment report.

---

## Graceful Degradation

Missing evidence should reduce completeness, not crash the workflow.

---

# Future Evolution

The architecture is intentionally designed to support future additions without major redesign.

Planned enhancements include:

- Response caching
- Background refresh jobs
- Internal database
- User authentication
- Portfolio analysis
- Watchlists
- Observability
- Cost monitoring
- Multi-market support

These features are intentionally excluded from Version 1.

---

# Architecture Status

Version: **1.0**

Status: **Frozen**

Any future architectural changes should be driven by implementation findings rather than additional design iterations.