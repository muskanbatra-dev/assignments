## 📋 Table of Contents

1. [Types of Databases](#types-of-databases)

   - [NoSQL Databases](#nosql-databases)
     - [Document Databases](#document-databases)
     - [Key-Value Stores](#key-value-stores)
     - [Column-Oriented Databases](#column-oriented-databases)
     - [Graph-Oriented Databases](#graph-oriented-databases)
   - [Graph Databases](#graph-databases)
     - [Property Graph Model](#property-graph-model)
     - [RDF Graph Model](#rdf-graph-model)
   - [Vector Databases](#vector-databases)
     - [Dense Vector Stores](#dense-vector-stores)
     - [Sparse Vector Stores](#sparse-vector-stores)
     - [Hybrid Vector Databases](#hybrid-vector-databases)
   - [SQL Databases](#sql-databases)
     - [Relational Databases](#relational-databases)
     - [Distributed SQL Databases](#distributed-sql-databases)
     - [Cloud-Native SQL Databases](#cloud-native-sql-databases)

2. [Why Not NoSQL?](#why-not-nosql)

   - [Introduction](#introduction)
   - [What is Schemaless?](#what-is-schemaless)
   - [Problems](#problems)
   - [Upsides](#upsides)

3. [Why SQL?](#why-sql)

   - [SQL Databases Have a Strict Schema](#sql-databases-have-a-strict-schema)
   - [Four Parts of Using an SQL Database](#four-parts-of-using-an-sql-database)

4. [Starting a PostgreSQL Database](#starting-a-postgresql-database)

   - [Ways to Start PostgreSQL](#ways-to-start-postgresql)
     - [Using NeonDB](#using-neondb)
     - [Using Docker Locally](#using-docker-locally)
     - [Using Docker on Windows](#using-docker-on-windows)
   - [Connection String Format](#connection-string-format)
   - [Example Notes](#example-notes)

5. [Using a Library That Lets You Connect and Put Data in It](#using-a-library-that-lets-you-connect-and-put-data-in-it)

   - [psql](#psql)
     - [What is psql?](#what-is-psql)
     - [How to Connect Using psql](#how-to-connect-using-psql)
     - [Example psql Command](#example-psql-command)
   - [pg](#pg)
     - [What is the pg Node.js Library?](#what-is-the-pg-nodejs-library)
     - [Installing pg](#installing-pg)
     - [Connecting to PostgreSQL Using pg](#connecting-to-postgresql-using-pg)
     - [Running Queries with pg](#running-queries-with-pg)

6. [Creating a Table and Defining Its Schema](#creating-a-table-and-defining-its-schema)

   - [Understanding Tables in SQL](#understanding-tables-in-sql)
   - [CREATE TABLE users](#create-table-users)
   - [id SERIAL PRIMARY KEY](#id-serial-primary-key)
   - [email VARCHAR(255) UNIQUE NOT NULL](#email-varchar255-unique-not-null)
   - [password VARCHAR(255) NOT NULL](#password-varchar255-not-null)
   - [created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP](#created_at-timestamp-with-time-zone-default-current_timestamp)
   - [Full SQL Example](#full-sql-example)
   - [Checking if Table Was Created](#checking-if-table-was-created)

7. [Interacting with the Database](#interacting-with-the-database)

   - [INSERT](#insert)
   - [UPDATE](#update)
   - [DELETE](#delete)
   - [SELECT](#select)

8. [How to Do Queries from a Node.js App?](#how-to-do-queries-from-a-nodejs-app)

   - [Installing the pg Library](#installing-the-pg-library)
   - [Creating a Database Client](#creating-a-database-client)
   - [Running Basic Queries](#running-basic-queries)
   - [Using Parameterized Queries](#using-parameterized-queries)
   - [Handling Errors](#handling-errors)
   - [Closing the Connection](#closing-the-connection)
   - [Using a Connection Pool](#using-a-connection-pool)

9. [Creating a Simple Node.js App](#creating-a-simple-nodejs-app)

   - [Initialize an Empty TypeScript Project](#initialize-an-empty-typescript-project)
   - [Update tsconfig.json Paths](#update-tsconfigjson-paths)
   - [Install the pg Library and Types](#install-the-pg-library-and-types)
   - [Insert Data into a Table (Async Function)](#insert-data-into-a-table-async-function)
   - [SQL Injection Warning](#sql-injection-warning)
   - [Secure Data Insertion Using Parameterized Queries](#secure-data-insertion-using-parameterized-queries)
   - [Querying Data with getUser Function](#querying-data-with-getuser-function)
   - [Example Usage](#example-usage)

10. [Relationships and Transactions](#relationships-and-transactions)

    - [Introduction to Relationships](#introduction-to-relationships)
    - [Relationships in MongoDB](#relationships-in-mongodb)
      - [Storing Nested Data in MongoDB](#storing-nested-data-in-mongodb)
      - [Example of User with Address Object](#example-of-user-with-address-object)
    - [Relationships in SQL](#relationships-in-sql)
      - [Why Separate Tables?](#why-separate-tables)
      - [Creating the Users Table](#creating-the-users-table)
      - [Creating the Addresses Table](#creating-the-addresses-table)
      - [Defining a Foreign Key Relationship](#defining-a-foreign-key-relationship)
    - [Inserting Related Data](#inserting-related-data)
      - [Insert Address for a User](#insert-address-for-a-user)
    - [Querying Related Data](#querying-related-data)
      - [Fetch User Address by User ID](#fetch-user-address-by-user-id)
    - [Transactions in SQL](#transactions-in-sql)
      - [Why Transactions Are Needed](#why-transactions-are-needed)
      - [SQL Transaction Example](#sql-transaction-example)
      - [Node.js Transaction Example](#nodejs-transaction-example)
    - [Summary](#summary)

11. [Joins](#joins)
    - [Understanding Joins](#understanding-joins)
    - [Approach 1 (Bad)](#approach-1-bad)
    - [Approach 2 (Using Joins)](#approach-2-using-joins)
    - [Benefits of Using Joins](#benefits-of-using-joins)
    - [Types of Joins](#types-of-joins)
      - [INNER JOIN](#inner-join)
      - [LEFT JOIN](#left-join)
      - [RIGHT JOIN](#right-join)
      - [FULL JOIN](#full-join)
    - [Example Node.js Code with INNER JOIN](#example-nodejs-code-with-inner-join)
    - [Summary](#summary-joins)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Types of Databases](#types-of-databases)

### [NoSQL Databases](#nosql-databases)

#### [Document Databases](#document-databases)

#### [Key-Value Stores](#key-value-stores)

#### [Column-Oriented Databases](#column-oriented-databases)

#### [Graph-Oriented Databases](#graph-oriented-databases)

### [Graph Databases](#graph-databases)

#### [Property Graph Model](#property-graph-model)

#### [RDF Graph Model](#rdf-graph-model)

### [Vector Databases](#vector-databases)

#### [Dense Vector Stores](#dense-vector-stores)

#### [Sparse Vector Stores](#sparse-vector-stores)

#### [Hybrid Vector Databases](#hybrid-vector-databases)

### [SQL Databases](#sql-databases)

#### [Relational Databases](#relational-databases)

#### [Distributed SQL Databases](#distributed-sql-databases)

#### [Cloud-Native SQL Databases](#cloud-native-sql-databases)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Why Not NoSQL?](#why-not-nosql)

### [Introduction](#introduction)

### [What is Schemaless?](#what-is-schemaless)

### [Problems](#problems)

### [Upsides](#upsides)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Why SQL?](#why-sql)

### [SQL Databases Have a Strict Schema](#sql-databases-have-a-strict-schema)

### [Four Parts of Using an SQL Database](#four-parts-of-using-an-sql-database)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Starting a PostgreSQL Database](#starting-a-postgresql-database)

### [Ways to Start PostgreSQL](#ways-to-start-postgresql)

#### [Using NeonDB](#using-neondb)

#### [Using Docker Locally](#using-docker-locally)

#### [Using Docker on Windows](#using-docker-on-windows)

### [Connection String Format](#connection-string-format)

### [Example Notes](#example-notes)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Using a Library That Lets You Connect and Put Data in It](#using-a-library-that-lets-you-connect-and-put-data-in-it)

### [psql](#psql)

#### [What is psql?](#what-is-psql)

#### [How to Connect Using psql](#how-to-connect-using-psql)

#### [Example psql Command](#example-psql-command)

### [pg](#pg)

#### [What is the pg Node.js Library?](#what-is-the-pg-nodejs-library)

#### [Installing pg](#installing-pg)

#### [Connecting to PostgreSQL Using pg](#connecting-to-postgresql-using-pg)

#### [Running Queries with pg](#running-queries-with-pg)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Creating a Table and Defining Its Schema](#creating-a-table-and-defining-its-schema)

### [Understanding Tables in SQL](#understanding-tables-in-sql)

### [CREATE TABLE users](#create-table-users)

### [id SERIAL PRIMARY KEY](#id-serial-primary-key)

### [email VARCHAR(255) UNIQUE NOT NULL](#email-varchar255-unique-not-null)

### [password VARCHAR(255) NOT NULL](#password-varchar255-not-null)

### [created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP](#created_at-timestamp-with-time-zone-default-current_timestamp)

### [Full SQL Example](#full-sql-example)

### [Checking if Table Was Created](#checking-if-table-was-created)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Interacting with the Database](#interacting-with-the-database)

### [INSERT](#insert)

### [UPDATE](#update)

### [DELETE](#delete)

### [SELECT](#select)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [How to Do Queries from a Node.js App?](#how-to-do-queries-from-a-nodejs-app)

### [Installing the pg Library](#installing-the-pg-library)

### [Creating a Database Client](#creating-a-database-client)

### [Running Basic Queries](#running-basic-queries)

### [Using Parameterized Queries](#using-parameterized-queries)

### [Handling Errors](#handling-errors)

### [Closing the Connection](#closing-the-connection)

### [Using a Connection Pool](#using-a-connection-pool)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Creating a Simple Node.js App](#creating-a-simple-nodejs-app)

### [Initialize an Empty TypeScript Project](#initialize-an-empty-typescript-project)

### [Update tsconfig.json Paths](#update-tsconfigjson-paths)

### [Install the pg Library and Types](#install-the-pg-library-and-types)

### [Insert Data into a Table (Async Function)](#insert-data-into-a-table-async-function)

### [SQL Injection Warning](#sql-injection-warning)

### [Secure Data Insertion Using Parameterized Queries](#secure-data-insertion-using-parameterized-queries)

### [Querying Data with getUser Function](#querying-data-with-getuser-function)

### [Example Usage](#example-usage)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Relationships and Transactions](#relationships-and-transactions)

### [Introduction to Relationships](#introduction-to-relationships)

### [Relationships in MongoDB](#relationships-in-mongodb)

#### [Storing Nested Data in MongoDB](#storing-nested-data-in-mongodb)

#### [Example of User with Address Object](#example-of-user-with-address-object)

### [Relationships in SQL](#relationships-in-sql)

#### [Why Separate Tables?](#why-separate-tables)

#### [Creating the Users Table](#creating-the-users-table)

#### [Creating the Addresses Table](#creating-the-addresses-table)

#### [Defining a Foreign Key Relationship](#defining-a-foreign-key-relationship)

### [Inserting Related Data](#inserting-related-data)

#### [Insert Address for a User](#insert-address-for-a-user)

### [Querying Related Data](#querying-related-data)

#### [Fetch User Address by User ID](#fetch-user-address-by-user-id)

### [Transactions in SQL](#transactions-in-sql)

#### [Why Transactions Are Needed](#why-transactions-are-needed)

#### [SQL Transaction Example](#sql-transaction-example)

#### [Node.js Transaction Example](#nodejs-transaction-example)

### [Summary](#summary)

---

## [⬆️ Back to Table of Contents](#-table-of-contents)

## [Joins](#joins)

### [Understanding Joins](#understanding-joins)

### [Approach 1 (Bad)](#approach-1-bad)

### [Approach 2 (Using Joins)](#approach-2-using-joins)

### [Benefits of Using Joins](#benefits-of-using-joins)

### [Types of Joins](#types-of-joins)

#### [INNER JOIN](#inner-join)

#### [LEFT JOIN](#left-join)

#### [RIGHT JOIN](#right-join)

#### [FULL JOIN](#full-join)

### [Example Node.js Code with INNER JOIN](#example-nodejs-code-with-inner-join)

### [Summary](#summary-joins)
