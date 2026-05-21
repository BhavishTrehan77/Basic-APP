# 🔐 MERN Authentication System

A full-stack authentication system built with the MERN stack featuring JWT authentication, protected routes, login/signup functionality, and secure backend APIs.

---

## 🚀 Features

- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality
- Password Hashing using bcrypt
- React Router DOM
- Express Middleware Authentication
- MongoDB Database Integration
- Frontend & Backend Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## 📁 Folder Structure

### Frontend

```bash
frontend/
│
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Protection/
│   ├── Service/
│   ├── App.jsx
│   └── main.jsx
```

### Backend

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── config/
├── server.js
└── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` file in backend folder.

```env
PORT=9000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## 🔐 Authentication Flow

1. User signs up
2. Password gets hashed using bcrypt
3. User logs in
4. JWT token generated
5. Token stored in localStorage
6. Protected routes check token
7. Backend middleware verifies JWT

---

## 📌 Future Improvements

- Refresh Token Authentication
- Role-Based Authentication
- Email Verification
- Forgot Password System
- Dark Mode UI
- User Profile Page
- Authentication Context API
- Cookie-Based Authentication
- Loading Spinners
- Toast Notifications
- Form Validation
- Deploy Frontend & Backend

---



## 👨‍💻 Author

Made with ❤️ by Bhavish
