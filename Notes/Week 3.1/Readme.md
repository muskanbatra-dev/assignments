# Middleware, Authentication, Global Caches, and Zod

## What is Middleware?

[![Slide 1](./Images/Slide1.png)](./Images/Slide1.png)

- Imagine a hospital: there is a doctor’s cabin, but the doctor can only attend to **one patient at a time** → single-threaded.
- Before entering the doctor’s cabin, patients must go through **pre-checks**:
  - Waiting area
  - Insurance check
  - Blood test
  - BP check
- A patient cannot enter the doctor’s cabin without completing these steps.

[![Slide 2](./Images/Slide2.png)](./Images/Slide2.png)

👉 Similarly, in JavaScript/Express, these **pre-checks** are called **middleware**, which run before the main request handler.

---

## Example: Express Middleware & Health Check

```javascript
const express = require("express");
const app = express();

// Middleware (example: logging)
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // continue to next middleware/route
});

// Health check route
app.get("/health-checkup", (req, res) => {
  res.send("Server is healthy 🚑");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

# HOW DO YOU DO THE AUTH CHECKS (DOES THIS USER HAVE FUNDS TO VISIT THE DOCTER )

# ENSURE INPUT BY USER IS VALID (BP/ BLOOD TESTS)
