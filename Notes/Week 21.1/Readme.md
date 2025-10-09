# Table of Contents

- [1. Introduction](#1-introduction)

  - [What is Rate Limiting](#what-is-rate-limiting)
  - [Why Rate Limiting is Crucial](#why-rate-limiting-is-crucial)
    - [Preventing Overload](#preventing-overload)
    - [Mitigating Abuse](#mitigating-abuse)
    - [Managing Traffic](#managing-traffic)
    - [DDoS Protection](#ddos-protection)
    - [Cost Optimization](#cost-optimization)

- [2. Applying Rate Limiting](#2-applying-rate-limiting)

  - [Password Reset Endpoints](#password-reset-endpoints)
  - [Login Endpoints](#login-endpoints)
  - [Sign-up/Registration Endpoints](#sign-upregistration-endpoints)
  - [API Endpoints](#api-endpoints)
  - [Sensitive Operations](#sensitive-operations)
  - [High-Traffic Endpoints](#high-traffic-endpoints)
  - [General Considerations](#general-considerations)

- [3. Implementing a Simple Reset Password Endpoint](#3-implementing-a-simple-reset-password-endpoint)

  - [Initializing a TypeScript Project](#initializing-a-typescript-project)
  - [Updating `tsconfig.json`](#updating-tsconfigjson)
  - [Installing Dependencies](#installing-dependencies)
  - [Creating the Express Server](#creating-the-express-server)
  - [`/generate-otp` Endpoint](#generate-otp-endpoint)
  - [`/reset-password` Endpoint](#reset-password-endpoint)
  - [Testing with Postman](#testing-with-postman)

- [4. Exploiting the Endpoint](#4-exploiting-the-endpoint)

  - [Exporting Node.js Code from Postman](#exporting-nodejs-code-from-postman)
  - [Creating a New Project](#creating-a-new-project)
  - [Installing Dependencies](#installing-dependencies-1)
  - [Adding Brute Force Logic](#adding-brute-force-logic)
  - [Running the Exploit](#running-the-exploit)
  - [Observing the Lack of Rate Limiting](#observing-the-lack-of-rate-limiting)

- [5. Exploiting in Production](#5-exploiting-in-production)

  - [Accessing the Live Website](#accessing-the-live-website)
  - [Copying Requests via Network Tab](#copying-requests-via-network-tab)
  - [Updating the Exploit Script](#updating-the-exploit-script)
  - [Observing Rate Limiting in Production](#observing-rate-limiting-in-production)

- [6. Securing the Endpoint](#6-securing-the-endpoint)

  - [Installing `express-rate-limit`](#installing-express-rate-limit)
  - [Adding Rate Limiting to `/generate-otp`](#adding-rate-limiting-to-generate-otp)
  - [Adding Rate Limiting to `/reset-password`](#adding-rate-limiting-to-reset-password)
  - [Explanation of Rate Limiter Configuration](#explanation-of-rate-limiter-configuration)
  - [Benefits of Rate Limiting](#benefits-of-rate-limiting)

- [7. Issues With Rate Limiting](#7-issues-with-rate-limiting)

  - [Limitations Against DDoS Attacks](#limitations-against-ddos-attacks)
  - [Why Attackers Perform DDoS Attacks](#why-attackers-perform-ddos-attacks)
  - [How DDoS Attacks Work](#how-ddos-attacks-work)
  - [Additional Protection Measures](#additional-protection-measures)
    - [Limited Password Resets](#limited-password-resets)
    - [Captcha Implementation](#captcha-implementation)
    - [DDoS Mitigation Services](#ddos-mitigation-services)
    - [Monitoring and Response](#monitoring-and-response)

- [8. Captchas](#8-captchas)

  - [The Need for Captchas](#the-need-for-captchas)
  - [Cloudflare Turnstile: Free Captcha Replacement](#cloudflare-turnstile-free-captcha-replacement)

- [9. Adding Captchas via Cloudflare Turnstile](#9-adding-captchas-via-cloudflare-turnstile)

  - [Setting up Cloudflare Turnstile](#setting-up-cloudflare-turnstile)
  - [Creating a React Project](#creating-a-react-project)
  - [Installing Turnstile React Package](#installing-turnstile-react-package)
  - [Updating the React Component](#updating-the-react-component)
  - [Updating the Backend to Verify Turnstile Token](#updating-the-backend-to-verify-turnstile-token)
  - [Benefits and Security Improvements](#benefits-and-security-improvements)

- [10. DDoS Protection in Production](#10-ddos-protection-in-production)
  - [Moving Your Domain to Cloudflare](#moving-your-domain-to-cloudflare)
  - [Proxying DNS Records via Cloudflare](#proxying-dns-records-via-cloudflare)
  - [Leveraging Cloudflare’s Global Network for DDoS Protection](#leveraging-cloudflares-global-network-for-ddos-protection)
