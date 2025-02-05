# EmpowerHub - Employee Management System

## 🚀 Live Site
🔗 [EmpowerHub Live](https://snazzy-daffodil-c813e6.netlify.app/)

## 📌 Overview
EmpowerHub is a comprehensive employee management system designed to streamline workforce monitoring, salary management, and employee workflow tracking. This platform enables employees to log their work updates, HR executives to verify and process payments, and administrators to manage the workforce efficiently.

---

## 🔑 Admin Credentials
- **Email:** admin@empowerhub.com
- **Password:** Admin123!

---

## ✨ Features
1. **Secure Authentication**: Supports email/password authentication and social logins (Google, GitHub).
2. **Role-based Dashboard**: Different dashboards for Employees, HR, and Admin with specific functionalities.
3. **Employee Work Tracking**: Employees can log work hours and task categories dynamically.
4. **HR Management**: HR can verify employees, process salaries, and view work progress.
5. **Admin Control**: Admin can manage employees, promote HR, adjust salaries, and approve payroll requests.
6. **JWT Authentication**: Secure role-based access control using JSON Web Token (JWT).
7. **Real-time Data Update**: Uses TanStack Query for optimized data fetching.
8. **Interactive UI**: Modern and responsive UI with table and grid view toggle.
9. **Payment Processing**: Secure payroll approval system for HR and Admin.
10. **Contact Form**: Allows visitors to send messages to the admin for inquiries.

---

## 🛠 Tech Stack
### **Frontend**
- React.js
- Tailwind CSS
- TanStack Query
- React Router
- Firebase Authentication
- React DatePicker

### **Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt for Password Hashing

---

## 📂 Folder Structure
```
📦 EmpowerHub
 ┣ 📂 client (Frontend)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 utils
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 tailwind.config.js
 ┣ 📂 server (Backend)
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 .env (Environment Variables)
 ┃ ┣ 📜 package.json
```

---

## 🔧 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/empowerhub.git
   ```
2. Navigate to the project folder:
   ```bash
   cd empowerhub
   ```
3. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Configure environment variables in `.env` files.
5. Start the development servers:
   ```bash
   cd client && npm start
   cd ../server && npm run dev
   ```

---

## 🔒 Environment Variables
Create a `.env` file in the server root directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

---

## 🏆 Contributions & Feedback
Feel free to fork this repository and contribute by submitting pull requests. For feedback or issues, open an issue on GitHub!

🚀 Built with ❤️ by [Nur Mahammad Mondol Robiul]


