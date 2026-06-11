Problem Statement

Traditional parking management systems often rely on manual entry, paper-based records, and security personnel to track vehicles and visitors. This process is time-consuming, prone to human errors, and can lead to congestion, unauthorized access, and inefficient utilization of parking spaces.

To address these challenges, a smart digital solution is required that automates visitor registration, parking allocation, and entry/exit verification. The proposed SmartPark QR system uses QR code technology to streamline parking operations by enabling quick visitor registration, secure authentication, digital record management, and instant QR code generation for vehicle access. This improves security, reduces waiting time, enhances parking space management, and provides a seamless experience for both administrators and visitors.

Objectives

Automate visitor and parking management.
Generate unique QR codes for visitor/vehicle verification.
Reduce manual paperwork and human errors.
Improve parking security and access control.
Maintain a centralized database of visitors and parking records.
Enable quick entry and exit through QR code scanning.

Technology Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
QR Generation: QRCode Library
# SmartPark QR – Setup Guide

## Project Structure
```
SmartPark-QR/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── controllers/
│   ├── models/
│   └── routes/
└── frontend/
    ├── index.html
    ├── css/style.css
    ├── js/
    └── pages/
```

## Step 1 – Install dependencies
```bash
cd backend
npm install
```

## Step 2 – Set MongoDB connection
Create a `.env` file inside `backend/`:
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/smartpark
JWT_SECRET=your_secret_here
```
Or use local MongoDB (default): `mongodb://127.0.0.1:27017/smartpark`

## Step 3 – Start the backend
```bash
cd backend
npm run dev      # with nodemon (auto-reload)
# or
npm start        # plain node
```
Server runs at http://localhost:5000

## Step 4 – Open the frontend
Open `frontend/index.html` in your browser (or use Live Server in VS Code).

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| POST | /api/visitor | Add visitor |
| GET  | /api/visitor | Get all visitors |
| POST | /api/qr/generate | Generate QR code |
