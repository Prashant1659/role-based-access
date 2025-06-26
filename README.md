# 📝 Full-Stack Blog App with Authentication and Role-Based Authorization

A full-stack blogging platform with **JWT-based authentication**, **admin/user roles**, and **blog post management** using **Node.js, Express, MongoDB, React, and Bootstrap**.

---

## 🔧 Features

### 👥 Authentication & Authorization
- Secure login/signup with JWT
- User roles: `user`, `admin`
- Route protection via middleware
- Admin-only access to create and delete blog posts

### 🧾 Blog Functionality
- View all blog posts (users and admins)
- Admin dashboard to:
  - Create new blog posts
  - Delete existing posts

### 💻 Tech Stack

| Layer       | Tech                 |
|-------------|----------------------|
| Frontend    | React, React Router, Bootstrap |
| Backend     | Node.js, Express.js  |
| Database    | MongoDB + Mongoose   |
| Auth        | JWT (JSON Web Token) |
| Styling     | Bootstrap 5          |

---

## 📁 Folder Structure

.
ROLE-BASED-ACCESS-SYSTEM
├── Backend
│ ├── public/
│ ├── src/
│ │ ├── controllers/
│ │ │ ├── blog.controller.js
│ │ │ └── user.controller.js
│ │ ├── db/
│ │ │ └── index.js
│ │ ├── middlewares/
│ │ │ ├── auth.middleware.js
│ │ │ └── role.middleware.js
│ │ ├── models/
│ │ │ ├── post.models.js
│ │ │ └── user.models.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ └── blog.routes.js
│ │ ├── utils/
│ │ └── app.js
│ ├── .env.sample
│ ├── package.json
│ └── README.md
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── BlogCard.jsx
│ │ │ └── Navbar.jsx
│ │ ├── pages/
│ │ │ ├── AdminDashboard.jsx
│ │ │ ├── BlogList.jsx
│ │ │ ├── Login.jsx
│ │ │ └── Signup.jsx
│ │ ├── api.js
│ │ ├── auth.js
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx
│ ├── .env
├── package.json
└── README.md

# To run this code these are the requirements
- System should have Node.js and Mongodb installed
- Setup Mongodb link in env file in backend folder. Along with that also mention PORT at which server will listen, Database name and JWT token secret. Refer to .env.sample in backend.

# We need to run backend and frontend using these commands

- Backend

|- Open the terminal in directory, it must be Role-Based-Access-System

|- Then move to backend directory using this command
```
cd backend
```

|- Then install the node modules
```
npm install
```
|- Then start the server
|-- using node 
```
npm start
```
|-- using nodemon
```
npm run dev
```

- Frontend

|- Open new terminal without closing the previous terminal

|- Change the directory to Frontend using the following command
```
cd frontend
```

|- Then install the node modules
```
npm install
```

|- Start the server
```
npm run dev
```