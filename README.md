# Payment Flow - Pay-per-Application System

## Overview

Payment Flow is a simple Pay-per-Application platform built as part of the PlaceMux Phase 2 task. The application allows students to pay an application fee of ₹100 and submit their application while tracking conversions through a backend metrics API.

The project demonstrates:

* Checkout UI
* Payment simulation
* Application submission flow
* Conversion tracking
* Metrics dashboard API
* Frontend and backend deployment on Render

---

## Features

### Frontend

* Responsive payment interface
* Loading state during payment processing
* Success state after payment completion
* Error handling for failed requests
* Mobile-friendly design

### Backend

* Payment success tracking API
* Conversion metrics API
* CORS enabled
* RESTful endpoints
* Render deployment ready

---

## Project Structure

payment-flow/

├── backend/

│ ├── server.js

│ └── package.json

│

└── frontend/

├── src/

│ ├── App.jsx

│ └── main.jsx

├── package.json

└── index.html

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

### Deployment

* Render Web Service
* Render Static Site

---

## API Endpoints

### Health Check

GET /

Response:

```json
{
  "message": "Payment Flow API Running"
}
```

### Payment Success

POST /api/payment-success

Response:

```json
{
  "success": true
}
```

### Metrics

GET /api/metrics

Response:

```json
{
  "applications_started": 1,
  "payments_completed": 1,
  "conversion_rate": "100%",
  "records": []
}
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/gokulakb/payment-flow.git
cd payment-flow
```

### Backend Setup

```bash
cd backend

npm install

npm start
```

Backend runs on:

```text
http://localhost:10000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Deployment

### Backend (Render)

Root Directory:

```text
backend
```

Build Command:

```text
npm install
```

Start Command:

```text
node server.js
```

### Frontend (Render Static Site)

Root Directory:

```text
frontend
```

Build Command:

```text
npm install && npm run build
```

Publish Directory:

```text
dist
```

---

## Live Demo

### Frontend

Add your deployed frontend URL here.

### Backend

https://payment-flow-5zel.onrender.com

### Metrics Endpoint

https://payment-flow-5zel.onrender.com/api/metrics

---

## Demo Flow

1. Open the application.
2. View job application details.
3. Click "Pay ₹100 & Apply".
4. Payment processing state is displayed.
5. Application submission is completed.
6. Conversion is tracked in backend.
7. Metrics endpoint reflects successful conversion.

---

## Learning Outcomes

* Built a complete Pay-per-Application workflow.
* Implemented frontend and backend integration.
* Created conversion tracking and baseline metrics.
* Deployed production-ready services on Render.
* Learned API integration, deployment, and monitoring workflows.

---


