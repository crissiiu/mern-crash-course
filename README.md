# MERN-CRASH-COURSE

A **MERN Stack** application built with **MongoDB, Express, React, and Node.js**, styled using **Tailwind CSS**. This project is a beginner-friendly crash course for learning how to develop a full-stack web application using the MERN stack.

---

## 🚀 Features

- 🔥 **Full-Stack CRUD Application** (Create, Read, Update, Delete)
- 🛠️ **Backend:**
  - MongoDB with **Mongoose**
  - RESTful API with **Express.js**
  - Environment Variables with **dotenv**
- 🎨 **Frontend:**
  - Modern UI built with **React.js**
  - Styled with **Tailwind CSS**
- 🌐 **End-to-End Connectivity:**
  - API calls with **Axios**
  - State management with **React Hooks**

---

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/MERN-CRASH-COURSE.git
cd MERN-CRASH-COURSE
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 📂 Project Structure

```
MERN-CRASH-COURSE/
│── backend/            # Express.js Server
│   ├── models/         # Mongoose Models
│   ├── routes/         # API Routes
│   ├── config/         # Database Configuration
│   ├── server.js       # Main Server File
│   ├── .env            # Environment Variables
│── frontend/           # React.js Application
│   ├── src/            # React Components & Pages
│   ├── public/         # Static Files
│   ├── tailwind.config.js # Tailwind Configuration
│── README.md           # Project Documentation
│── package.json        # Dependencies & Scripts
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/items`     | Fetch all items   |
| POST   | `/api/items`     | Create a new item |
| PUT    | `/api/items/:id` | Update an item    |
| DELETE | `/api/items/:id` | Delete an item    |

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Tools:** Dotenv, Axios, Vite (for React)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.

---

### 🎯 Happy Coding! 🚀
