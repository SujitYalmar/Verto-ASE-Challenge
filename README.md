# Employee Management CRUD Application 🚀

This is a full-stack web application that provides a complete **Create, Read, Update, and Delete (CRUD)** interface for managing a list of employees. The application features a **RESTful backend** built with **Node.js, Express, and SQLite**, and a dynamic, user-friendly **frontend built with React**.

---

## ✨ Features

- **Full CRUD Functionality**: Create, read, update, and delete employee records.  
- **Clean & Responsive UI**: A modern interface for easy interaction.  
- **RESTful API**: A well-structured backend API for handling employee data.  
- **Lightweight Database**: Uses SQLite for simple, file-based data persistence.  
- **Real-time Search**: Instantly filter employees by name.  
- **Client-Side Validation**: Ensures data integrity before submission.  
- **Backend Testing**: Includes a full suite of integration tests for API endpoints.  

---

## 🛠️ Tech Stack

### Backend
- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web framework for Node.js  
- **SQLite3** – Self-contained SQL database engine  
- **CORS** – Middleware for cross-origin resource sharing  

### Frontend
- **React.js** – JavaScript library for building UI  
- **Axios** – HTTP client for API requests  
- **CSS** – Custom styling for a modern look  

### Testing
- **Jest** – JavaScript testing framework  
- **Supertest** – HTTP server testing library  

---

## ✅ Prerequisites
Ensure the following are installed:

- **Node.js** (v18.x or later) → [Download here](https://nodejs.org/)  
- **npm** (comes with Node.js installation)  

---

## ⚙️ Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/SujitYalmar/Verto-ASE-Challenge.git
cd employee-crud-app
```
### Setup the Backend
```bash
cd backend
npm install
```
### Setup the Frontend
```bash
cd ../frontend
npm install
```
### 🚀 Running the Application
You’ll need two terminals: one for the backend and one for the frontend.

### Start the Backend
```bash
cd backend
npm start
```
- Runs on http://localhost:5001
- SQLite database file (employees.db) will be created at:
 backend/src/config/

### Start the Frontend
```bash
cd ../frontend
npm install
```
- Runs on http://localhost:3000

  ### 📋 API Endpoints
  Base Path: /api/employees\
 <img width="893" height="321" alt="image" src="https://github.com/user-attachments/assets/1efef819-ce4f-4f55-95ec-8ddeb041f9ef" />\

Example Request Body (POST/PUT):
```bash
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "position": "Lead Developer"
}
```
### 📁 Project Structure
<img width="671" height="563" alt="image" src="https://github.com/user-attachments/assets/a9817739-9ed5-41b9-9592-d582e7acbe59" />

## 📜 License

This project is licensed under the MIT License – see the LICENSE file for details.

# Employee Management CRUD Application 🚀

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite&logoColor=white)
![Jest](https://img.shields.io/badge/Tests-Jest-orange?logo=jest&logoColor=white)
