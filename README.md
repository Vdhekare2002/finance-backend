Project Name:

Finance Dashboard Backend
Description:

This is a backend system for a finance dashboard that manages financial records and provides role-based access control for different users. The system allows Admins, Analysts, and Viewers to interact with the system according to their permissions.

Key Features:

User registration and login
Role-based access control (Admin / Analyst / Viewer)
CRUD operations for financial records
Dashboard summary API (total income, expenses, net balance)
Input validation and error handling
Tech Stack:
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Authentication: JWT
Other Libraries: bcryptjs, dotenv, cors

finance-backend/
├── config/
│   └── db.js                # MongoDB connection
├── models/
│   ├── User.js              # User schema
│   └── Record.js            # Financial record schema
├── middleware/
│   ├── authMiddleware.js    # JWT authentication
│   └── roleMiddleware.js    # Role-based access control
├── controllers/
│   ├── authController.js
│   ├── recordController.js
│   └── dashboardController.js
├── routes/
│   ├── authRoutes.js
│   ├── recordRoutes.js
│   └── dashboardRoutes.js
├── app.js
├── server.js
└── package.json




Setup Instructions
Clone the repository
git clone <your_repo_url>
cd finance-backend
Install dependencies
npm install
Create .env file in root:
MONGO_URI=your_mongodb_connection_string
Start the server
node server.js

or with nodemon (recommended for development)

nodemon server.js
Server runs on: http://localhost:5000
API Endpoints
1. Authentication
Endpoint	Method	Body	Access
/api/auth/register	POST	{ "name", "email", "password", "role" }	Public
/api/auth/login	POST	{ "email", "password" }	Public

Response: JWT token
Use token for all protected routes: Authorization: Bearer <token>

2. Financial Records
Endpoint	Method	Body	Access
/api/records/	POST	{ "amount", "type", "category", "notes" }	Admin only
/api/records/	GET	?type=&category=	Admin / Analyst / Viewer
/api/records/:id	PUT	{ "amount", "category", "notes" }	Admin only
/api/records/:id	DELETE	-	Admin only

Notes:

type → "income" or "expense"
category → string (e.g., Salary, Food, Rent)
3. Dashboard Summary
Endpoint	Method	Access
/api/dashboard/	GET	Admin / Analyst

Response Example:

{
  "totalIncome": 15000,
  "totalExpense": 5000,
  "netBalance": 10000
}
Role-Based Access
Role	Permissions
Admin	Full access (CRUD + dashboard)
Analyst	Read records + dashboard summary
Viewer	Read-only records (cannot create/update/delete/dashboard)
Testing Guide
Register Users for Admin, Analyst, Viewer
Login → Get JWT token
Set token in Postman environment variable
Test CRUD operations: Admin can create/update/delete, others cannot
Test Dashboard: Only Admin & Analyst can access
Test Filters: GET /api/records/?type=income&category=Salary

Use Postman Collection: finance-backend.postman_collection.json
Variables: adminToken, analystToken, viewerToken, recordId

Validation & Error Handling
Missing required fields → 400 Bad Request
Unauthorized access → 401 Unauthorized
Forbidden operation (role restriction) → 403 Access Denied
Record not found → 404 Not Found
Optional Enhancements (Future)
Pagination for records
Search support by category/date
Soft delete (isDeleted flag)
Unit & integration tests
Swagger API documentation
Deployment
Can be deployed on Render, Railway, or Heroku
Set MONGO_URI as environment variable
Use npm start to launch
