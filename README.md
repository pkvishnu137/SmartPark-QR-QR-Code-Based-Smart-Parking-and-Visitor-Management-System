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
