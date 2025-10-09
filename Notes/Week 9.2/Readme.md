# 📘 Week 9.2 – Introduction to TypeScript

This lecture provides a foundational understanding of **TypeScript** — a statically typed superset of JavaScript. It explores why TypeScript was created, how it enhances JavaScript development through static typing and compile-time checks, and walks through practical examples, TypeScript compiler setup, and configuration of `tsconfig.json`. The session also introduces **Interfaces** and their real-world use in applications.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Understanding Language Types](#understanding-language-types)
   - [Loosely Typed Languages](#loosely-typed-languages)
   - [Strongly Typed Languages](#strongly-typed-languages)
3. [Why TypeScript?](#why-typescript)
4. [Setting Up TypeScript](#setting-up-typescript)
   - [Compiling TypeScript Code](#compiling-typescript-code)
   - [Running Compiled JavaScript](#running-compiled-javascript)
5. [Practical Examples](#practical-examples)
   - [Basic Function Example](#basic-function-example)
   - [Type Annotations](#type-annotations)
   - [Return Type Specification](#return-type-specification)
   - [Union Types and Arrays](#union-types-and-arrays)
6. [Compiler Configuration: tsconfig.json](#compiler-configuration-tsconfigjson)
7. [Interfaces in TypeScript](#interfaces-in-typescript)
   - [Using Interfaces](#using-interfaces)
   - [Interfaces vs Types](#interfaces-vs-types)
8. [Summary](#summary)

---

## 1. Overview

TypeScript is a **statically typed** superset of JavaScript that introduces **type safety** to the language. It helps developers catch errors during **compile time** rather than at runtime, making code more predictable and maintainable.

---

## 2. Understanding Language Types

### Loosely Typed Languages

Languages like **JavaScript** allow variables to hold values of any type.

```js
let a = 10;
a = "hello"; // valid in JavaScript
```
