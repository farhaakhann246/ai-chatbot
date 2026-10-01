# AI Chatbot

A production-style AI chatbot built with **Node.js, Express.js, and JavaScript**, designed with a clean backend architecture that supports multiple LLM providers.

The project currently runs with a **Mock LLM provider**, allowing the complete application architecture and UI to work without requiring an API key. It can be switched to the **OpenAI provider** through environment configuration.

---

## 🚀 Features

- Chat-based web interface
- Node.js + Express.js backend
- REST API architecture
- Provider-based LLM architecture
- Mock LLM provider for local development
- OpenAI provider integration
- Conversation history support
- Request validation
- Centralized error handling
- Environment-based configuration
- Health-check endpoint
- Responsive frontend
- Separation of routes, controllers, services, providers, and utilities
- Easy switching between Mock and OpenAI providers

---

## 🏗️ Architecture

The application follows a layered backend architecture:

```text
Browser
   │
   ▼
Frontend
HTML / CSS / JavaScript
   │
   ▼
REST API
POST /api/chat
   │
   ▼
Route
   │
   ▼
Controller
   │
   ▼
Chat Service
   │
   ├── Validation
   │
   └── LLM Service
          │
          ├── Mock Provider
          │
          └── OpenAI Provider
