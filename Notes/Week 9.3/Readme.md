This lecture provides a foundational understanding of **TypeScript** — a statically typed superset of JavaScript.  
It explores why TypeScript was created, how it enhances JavaScript development through static typing and compile-time checks,  
and walks through practical examples, TypeScript compiler setup, and configuration of `tsconfig.json`.  
The session also introduces **Interfaces**, **Generics**, **Enums**, and **Import/Export** in TypeScript, showcasing their practical use in real-world applications.

---

## 📋 Table of Contents

1. [Overview](#1-overview)

2. [Generics in TypeScript](#8-generics-in-typescript)
3. [Enums in TypeScript](#9-enums-in-typescript)
4. [Import and Export in TypeScript](#10-import-and-export-in-typescript)
5. [Summary](#11-summary)

---

## 🧩 1. Overview

TypeScript extends JavaScript by adding **static types**. It helps developers catch errors during development rather than at runtime, improving code reliability, scalability, and readability.

---

## ⚙️ 2. Understanding Language Types

### Loosely Typed Languages

```js
let x = 5;
x = "Hello"; // ✅ No error in JS
```

### Strongly Typed Languages

```ts
let x: number = 5;
x = "Hello"; // ❌ Error
```

---

## 💡 3. Why TypeScript?

- Early **error detection**
- **Better IDE support**
- **Scalable** for large codebases
- **Compatible** with JavaScript

---

## 🛠️ 4. Setting Up TypeScript

Install TypeScript globally:

```bash
npm install -g typescript
```

Verify installation:

```bash
tsc -v
```

Initialize in project:

```bash
tsc --init
```

### Compiling TypeScript Code

```bash
tsc index.ts
```

### Running Compiled JavaScript

```bash
node index.js
```

---

## 💻 5. Practical Examples

### Basic Function Example

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Type Annotations

```ts
let isActive: boolean = true;
let age: number = 25;
let userName: string = "Muskan";
```

### Return Type Specification

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Union Types and Arrays

```ts
let id: string | number;
id = 101;
id = "EMP202";

let scores: number[] = [85, 90, 95];
```

---

## ⚙️ 6. Compiler Configuration: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

---

## 🧠 7. Interfaces in TypeScript

### Using Interfaces

```ts
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: User = {
  name: "Muskan",
  age: 25,
  isActive: true,
};
```

### Interfaces vs Types

| Feature         | Interface | Type             |
| --------------- | --------- | ---------------- |
| Extends         | ✅ Yes    | ✅ Yes           |
| Merge           | ✅ Yes    | ❌ No            |
| Use for objects | ✅ Common | ✅ Also possible |

---

## 🧩 8. Generics in TypeScript

Generics make code reusable and type-safe.

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

### Generic Interface

```ts
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Books" };
const numberBox: Box<number> = { content: 42 };
```

### Generic Constraint

```ts
function printId<T extends { id: number }>(obj: T) {
  console.log(obj.id);
}

printId({ id: 1, name: "Muskan" });
```

---

## 🎯 9. Enums in TypeScript

### Numeric Enum

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

### String Enum

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
```

### Const Enum

```ts
const enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

const code = Status.Success;
```

---

## 📦 10. Import and Export in TypeScript

### Export

```ts
// user.ts
export interface User {
  name: string;
  age: number;
}

export const greetUser = (user: User): string => {
  return `Hello, ${user.name}`;
};
```

### Import

```ts
// main.ts
import { User, greetUser } from "./user";

const user: User = { name: "Muskan", age: 25 };
console.log(greetUser(user));
```

### Default Export

```ts
// mathUtils.ts
export default function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import add from "./mathUtils";
console.log(add(5, 10));
```

---

## 🧾 11. Summary

- **TypeScript** adds static typing for better reliability.
- **Interfaces** define object shapes and enforce structure.
- **Generics** provide flexibility with strong typing.
- **Enums** make code readable with named constants.
- **Import/Export** promotes modular and maintainable code.
