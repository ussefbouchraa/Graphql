<h1 align="center">GraphQL Dashboard (Vanilla JS)</h1>
<p align="center">A lightweight Single Page Application (SPA) that uses GraphQL queries, vanilla JavaScript, and a custom router to display user data, stats, and dynamic graphs.</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript Version">
  <img src="https://img.shields.io/badge/GraphQL-API-E10098?style=for-the-badge&logo=graphql" alt="GraphQL Badge">
  <img src="https://img.shields.io/badge/SPA-VanillaJS-00C4CC?style=for-the-badge" alt="SPA Badge">
</p>

## 📝 Overview

**GraphQL Dashboard** is a fully client-side web application that consumes GraphQL APIs to show:

- User information  
- XP & Level stats  
- Transactions and events  
- Dynamic graphs  
- Interactive dashboard pages  

It uses:

- A custom fetch wrapper  
- A small SPA router  
- Vanilla JavaScript DOM rendering  
- JWT authentication  
- No frameworks, no libraries  

This project is ideal for understanding **GraphQL querying**, **SPA routing**, and **token-based auth** using only plain JavaScript.

---

## 📁 Project Structure
Graphql/
├── readme
├── src
│ ├── auth
│ │ ├── login.js # Login request + UI handling
│ │ └── token.js # JWT storage + validation
│ ├── components
│ │ ├── graphs.js # Graph rendering logic
│ │ ├── pages.js # Dashboard pages
│ │ └── sections.js # Header, layout, sections
│ ├── dependencies
│ │ ├── queries.js # All GraphQL queries
│ │ └── request.js # Fetch wrapper
│ └── main
│ ├── app.js # Entry point
│ ├── helper.js # Small utilities
│ ├── renders.js # DOM renderer
│ └── router.js # SPA router
└── static
├── _redirects # Netlify SPA routing
├── index.html # Main HTML file
├── logo.png
└── style.css



---

## ✨ Features

### 🔐 Authentication
- Login using email + password  
- JWT stored securely  
- Token automatically added to every GraphQL request  
- Auto-logout when token is invalid

### 📊 Dashboard & Graphs
- Fetch and display user profile info  
- XP & level stats  
- Event and transaction lists  
- Graphs made with **pure JavaScript**  
- Fast dynamic rendering

### 🌐 SPA Navigation
- Hash-based routes (`#/login`, `#/home`, `#/graph`)  
- No full page reload  
- Smooth transitions and components  

### ⚙️ Core Logic
- Custom fetch wrapper with error handling  
- Modular helpers (DOM + string utils)  
- Centralized router  
- Consistent rendering engine  

---

## 🛠️ Tech Stack

| Area        | Technology                     |
|-------------|--------------------------------|
| Frontend    | JavaScript (ES6+), HTML, CSS   |
| API         | GraphQL                        |
| Architecture| SPA (Custom Router)            |
| Auth        | JWT (localStorage)             |
| Deployment  | Netlify                        |

---

## 🔒 Security

Security rules applied in this project:

### JWT Handling
- Token stored in localStorage  
- Verified before every request  
- Auto logout on `401 Unauthorized`  

### Safe Rendering
- No `innerHTML` injection  
- No unsafe parsing  
- No client-side eval  

### SPA Routing Safety
- `_redirects` file ensures safe navigation on Netlify  
- Prevents broken routes on refresh  

---

## 🚀 Deployment

Deployed easily on **Netlify**:

- `_redirects` file already included  
- Works as SPA  
- Supports hash routing  

Deployment steps:


---

## ✨ Features

### 🔐 Authentication
- Login using email + password  
- JWT stored securely  
- Token automatically added to every GraphQL request  
- Auto-logout when token is invalid

### 📊 Dashboard & Graphs
- Fetch and display user profile info  
- XP & level stats  
- Event and transaction lists  
- Graphs made with **pure JavaScript**  
- Fast dynamic rendering

### 🌐 SPA Navigation
- Hash-based routes (`#/login`, `#/home`, `#/graph`)  
- No full page reload  
- Smooth transitions and components  

### ⚙️ Core Logic
- Custom fetch wrapper with error handling  
- Modular helpers (DOM + string utils)  
- Centralized router  
- Consistent rendering engine  

---

## 🛠️ Tech Stack

| Area        | Technology                     |
|-------------|--------------------------------|
| Frontend    | JavaScript (ES6+), HTML, CSS   |
| API         | GraphQL                        |
| Architecture| SPA (Custom Router)            |
| Auth        | JWT (localStorage)             |
| Deployment  | Netlify                        |

---

## 🔒 Security

Security rules applied in this project:

### JWT Handling
- Token stored in localStorage  
- Verified before every request  
- Auto logout on `401 Unauthorized`  

### Safe Rendering
- No `innerHTML` injection  
- No unsafe parsing  
- No client-side eval  

### SPA Routing Safety
- `_redirects` file ensures safe navigation on Netlify  
- Prevents broken routes on refresh  

---

## 🚀 Deployment

Deployed easily on **Netlify**:

- `_redirects` file already included  
- Works as SPA  
- Supports hash routing  

Deployment steps:

