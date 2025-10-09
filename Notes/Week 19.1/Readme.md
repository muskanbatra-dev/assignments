# 📘 Backend Communication – Week 19.1

This repository contains lecture notes and examples from **Week 19.1**, covering the fundamentals of **backend communication**, including WebSockets, polling, Node.js/Next.js implementation, and scaling strategies using pub/sub architectures.

---

## 📋 Table of Contents

1. [Backend Communication](#backend-communication)
   - [Why Do We Need?](#why-do-we-need)
   - [General Backend Communication](#general-backend-communication)
   - [PayTM Transaction Flow](#paytm-transaction-flow)
   - [LeetCode Problem Submission](#leetcode-problem-submission)
2. [Types of Communication](#types-of-communication)
   - [Synchronous Communication (Strong Coupling)](#synchronous-communication-strong-coupling)
   - [Asynchronous Communication (Weak Coupling)](#asynchronous-communication-weak-coupling)
3. [WebSockets](#websockets)
   - [Use Cases for WebSockets](#use-cases-for-websockets)
   - [Why Not Use HTTP/REST?](#why-not-use-httprest)
   - [Polling vs WebSockets](#polling-vs-websockets)
   - [LeetCode Example](#leetcode-example)
4. [WebSocket in Node.js](#websocket-in-nodejs)
   - [Popular WebSocket Libraries](#popular-websocket-libraries)
   - [Example: WebSocket Server Using `ws`](#example-websocket-server-using-ws)
5. [Implementing WebSockets in Node.js](#implementing-websockets-in-nodejs)
   - [Step 1: Initialize Node.js Project](#step-1-initialize-nodejs-project)
   - [Step 2: Setup TypeScript Configuration](#step-2-setup-typescript-configuration)
   - [Step 3: Install Dependencies](#step-3-install-dependencies)
   - [Step 4: Create WebSocket Server with HTTP Module](#step-4-create-websocket-server-with-http-module)
   - [Step 5: Create WebSocket Server with Express.js](#step-5-create-websocket-server-with-expressjs)
6. [Handling Client Side (React)](#handling-client-side-react)
   - [Custom Hook: `useSocket`](#custom-hook-usesocket)
   - [Using the Hook in a React Component](#using-the-hook-in-a-react-component)
7. [Next.js Implementation](#nextjs-implementation)
   - [Step 1: Create a Next.js Project](#step-1-create-a-nextjs-project)
   - [Step 2: Update `page.tsx` to Client Component](#step-2-update-pagetsx-to-client-component)
   - [Step 3: Add WebSocket Code](#step-3-add-websocket-code)
8. [Scaling WebSocket Servers](#scaling-websocket-servers)
   - [Multiple WebSocket Servers](#multiple-websocket-servers)
   - [Central Orchestration Layer](#central-orchestration-layer)
   - [Stateless WebSocket Servers](#stateless-websocket-servers)
   - [Pub/Sub Architecture for Scaling WebSocket Servers](#pubsub-architecture-for-scaling-websocket-servers)
