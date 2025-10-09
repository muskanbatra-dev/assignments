# Week 21.2 - Stateful vs Stateless Backends, Singleton & Pub/Sub Patterns

This repository contains notes, diagrams, and example code covering the concepts of **stateful vs stateless backends**, the **Singleton pattern**, and the **Publish-Subscribe (Pub/Sub) pattern** combined with Singleton in Node.js/TypeScript.

---

## Table of Contents

1. [Stateful vs Stateless Backends](#stateful-vs-stateless-backends)

   - [Common Interview Question](#common-interview-question)
   - [Stateless Servers](#stateless-servers)
     - Advantages
     - Diagram
   - [Stateful Servers](#stateful-servers)
     - Examples
     - Stickiness
     - Diagram
   - [Understanding State in JS Process](#state-in-js-process)
     - Example with `store.ts`, `index.ts`, and `logger.ts`
     - Diagram

2. [Classes and Singleton Pattern](#classes-and-singleton-pattern)

   - [Initial Approach](#initial-approach)
   - [Bad Approach](#bad-approach)
   - [Slightly Better Approach](#slightly-better-approach)
   - [Singleton Pattern](#singleton-pattern)
     - Implementation
     - Trying to Create a New Instance
   - Benefits of Singleton

3. [Pub/Sub + Singleton Pattern](#pubsub--singleton-pattern)

   - [Pub/Sub Pattern](#pubsub-pattern)
   - [Singleton Pattern](#singleton-pattern-1)
   - [System Design](#system-design)
     - Architecture Diagram
     - Flow
   - [Implementation of Pub-Sub](#implementation-of-pub-sub)
     - Starting the Pub/Sub System
     - Creating the PubSubManager Class
     - Simulating Users with `index.ts`
   - [Benefits of Combining Pub/Sub with Singleton](#benefits-of-combining-pubsub-with-singleton)

4. [References & External Links](#references--external-links)

---

## Stateful vs Stateless Backends

- Stateless servers do not store in-memory state; they rely on external storage like databases.
- Stateful servers maintain in-memory state and often require **stickiness**.
- Use cases:
  - Stateless: Load-balanced web servers, microservices.
  - Stateful: Real-time games, chat applications, in-memory caches.

---

## Classes and Singleton Pattern

- **GameManager** class example to manage game states.
- Singleton pattern ensures a **single instance** and prevents accidental multiple instantiations.
- Provides global point of access using `getInstance()`.

---

## Pub/Sub + Singleton Pattern

- **Pub/Sub Pattern**: Decouples publishers and subscribers via channels.
- **Singleton Pattern**: Ensures a single `PubSubManager` instance managing all subscriptions.
- Architecture:
  - Users connect via WebSockets
  - PubSubManager tracks subscriptions
  - Redis is used for messaging
- Code demonstrates:
  - User subscription/unsubscription
  - Handling messages from Redis
  - Real-time updates sent to users

---
