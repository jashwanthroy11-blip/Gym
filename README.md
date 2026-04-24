# Gym Management App

A modern full-stack Gym Management Application built with React, Tailwind CSS, Node.js, Express, MongoDB, and JWT authentication.

## Features

- Role-based authentication: Admin, Trainer, Member
- Admin dashboard for membership, subscriptions, payments and analytics
- Trainer dashboard for workout plans and member progress
- Member dashboard for workout tracking, subscription status, and payment history
- Responsive UI with dark/light mode support
- API-ready backend with scalable folder structure

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT
- Payment integration ready for Stripe

## Folder Structure

- `backend/` - API server
- `frontend/` - React application

## Getting Started

### Backend

1. Open `backend/` directory
2. Copy `.env.example` to `.env`
3. Install dependencies: `npm install`
4. Start server: `npm run dev`

### Frontend

1. Open `frontend/` directory
2. Install dependencies: `npm install`
3. Start app: `npm run dev`

## Environment Variables

Backend `.env` example:

```
MONGO_URI=mongodb://localhost:27017/gymapp
JWT_SECRET=supersecurejwtsecret
CLIENT_URL=http://localhost:5173
STRIPE_SECRET_KEY=
```

## Deployment

Deploy backend to any Node.js hosting and frontend to Vercel, Netlify, or GitHub Pages.

---

Built as a production-ready starter with clean code and expandable modules.
