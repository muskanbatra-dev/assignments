# 📋 Table of Contents – Week 10.1: Understanding PostgreSQL

1. [Introduction](#introduction)

   - [Overview](#overview)
   - [What We'll Learn Today](#what-well-learn-today)

2. [Types of Databases](#types-of-databases)

   - [NoSQL Databases](#nosql-databases)
   - [Graph Databases](#graph-databases)
   - [Vector Databases](#vector-databases)
   - [SQL Databases](#sql-databases)

3. [Why Not NoSQL](#why-not-nosql)

   - [What is Schemaless?](#what-is-schemaless)
   - [Problems with Schemaless Databases](#problems-with-schemaless-databases)
   - [Upsides of Schemaless Databases](#upsides-of-schemaless-databases)
   - [Mongoose and Schema Enforcement](#mongoose-and-schema-enforcement)

4. [Why SQL?](#why-sql)

   - [Strict Schema](#strict-schema)
   - [Running the Database](#running-the-database)
   - [Connecting and Manipulating Data](#connecting-and-manipulating-data)
   - [Benefits of SQL Databases](#benefits-of-sql-databases)

5. [Creating a PostgreSQL Database](#creating-a-postgresql-database)

   - [Using Neon](#using-neon)
   - [Using Docker Locally](#using-docker-locally)
   - [Using Docker on Windows](#using-docker-on-windows)
   - [Connection String](#connection-string)
   - [Understanding Connection String Components](#understanding-connection-string-components)

6. [Understanding Vector Databases](#understanding-vector-databases)

7. [Interacting with PostgreSQL](#interacting-with-postgresql)

   - [psql](#psql)
   - [pg (node-postgres)](#pg-node-postgres)

8. [Creating a Table Schema](#creating-a-table-schema)

   - [Creating a Table in SQL](#creating-a-table-in-sql)
   - [Practical Steps](#practical-steps)

9. [Interacting with the Database – CRUD Operations](#interacting-with-the-database--crud-operations)

   - [INSERT (Create)](#insert-create)
   - [UPDATE](#update)
   - [DELETE](#delete)
   - [SELECT (Read)](#select-read)
   - [Practical Tips](#practical-tips)

10. [Database Operations Using Node.js and pg](#database-operations-using-nodejs-and-pg)

    - [Installing the pg Library](#installing-the-pg-library)
    - [Connecting to the Database](#connecting-to-the-database)
    - [Querying the Database](#querying-the-database)
    - [Creating a Table](#creating-a-table)

11. [Creating a Simple Node.js App (TypeScript)](#creating-a-simple-nodejs-app-typescript)

    - [Step 1: Initialize a TypeScript Project](#step-1-initialize-a-typescript-project)
    - [Step 2: Install Dependencies](#step-2-install-dependencies)
    - [Step 3: Create a Simple Node.js App](#step-3-create-a-simple-nodejs-app)
      - [Insert Data Function](#insert-data-function)
      - [Fetch Data Function](#fetch-data-function)

12. [Conclusion](#conclusion)
