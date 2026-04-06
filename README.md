# 💰 Finance Dashboard Backend

## 📌 Project Overview

This project is a **Finance Data Processing and Access Control Backend** built using Node.js and MongoDB.
It provides APIs for managing financial records and enforcing **role-based access control**.

The system supports three roles:

* **Admin** → Full access (CRUD + dashboard)
* **Analyst** → Read records + dashboard insights
* **Viewer** → Read-only access

---

## 🚀 Features

* User Registration & Login (JWT आधारित authentication)
* Role-Based Access Control (RBAC)
* Financial Records CRUD APIs
* Dashboard Summary (Income, Expense, Balance)
* Filtering (type, category)
* Clean architecture (MVC pattern)
* Error handling & validation

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Libraries:** bcryptjs, dotenv, cors

---

## 📁 Project Structure

```
finance-backend/
├── config/
├── models/
├── middleware/
├── controllers/
├── routes/
├── app.js
├── server.js
├── .env.example
├── package.json
```

---

## ⚙️ Setup & Run

### 1. Clone Repository

```bash
git clone <your_repo_url>
cd finance-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Update `.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start Server

```bash
node server.js
```

or

```bash
nodemon server.js
```

✅ Server runs on: `http://localhost:5000`

---

## 🔐 Authentication

### Register

`POST /api/auth/register`

```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "123456",
  "role": "admin"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

📌 Response:

```
{
  "token": "JWT_TOKEN"
}
```

👉 Use token in headers:

```
Authorization: Bearer <token>
```

---

## 💰 Financial Records API

### Create Record (Admin only)

`POST /api/records/`

```json
{
  "amount": 5000,
  "type": "income",
  "category": "Salary",
  "notes": "March salary"
}
```

---

### Get Records (All roles)

`GET /api/records/`

Filter:

```
/api/records/?type=income&category=Salary
```

---

### Update Record (Admin only)

`PUT /api/records/:id`

---

### Delete Record (Admin only)

`DELETE /api/records/:id`

---

## 📊 Dashboard API

### Get Summary (Admin + Analyst)

`GET /api/dashboard/`

```json
{
  "totalIncome": 15000,
  "totalExpense": 5000,
  "netBalance": 10000
}
```

---

## 🔒 Role-Based Access

| Role    | Permissions      |
| ------- | ---------------- |
| Admin   | Full access      |
| Analyst | Read + Dashboard |
| Viewer  | Read-only        |

---

## 🧪 Testing (Postman)

1. Import `finance-backend.postman_collection.json`
2. Register users (Admin, Analyst, Viewer)
3. Login → Copy token
4. Set token in variables:

   * `adminToken`
   * `analystToken`
   * `viewerToken`
5. Test all APIs

---

## ⚠️ Error Handling

| Error         | Status |
| ------------- | ------ |
| Missing input | 400    |
| Unauthorized  | 401    |
| Forbidden     | 403    |
| Not found     | 404    |

---

## 🌐 Deployment (Optional)

You can deploy using:

* Render
* Railway
* Heroku

Set environment variable:

```
MONGO_URI
```

---

## 📦 Quick Run (One Command)

```bash
git clone <repo> && cd finance-backend && npm install && cp .env.example .env && node server.js
```

---

## 📝 Notes

* This project focuses on **backend design, logic, and access control**
* Not production-ready but **structured for real-world understanding**
* Demonstrates **clean code + scalable architecture**

---

## 👨‍💻 Author

Vaishnavi Dhekare

---

## 🎯 Conclusion

This project demonstrates:

* Backend architecture design
* Role-based access control
* API development best practices
* Data handling and validation

---

🔥 **Ready for submission**
