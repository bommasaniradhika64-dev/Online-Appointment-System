# AppointEase – Online Appointment Management System

AppointEase is a full-stack web application that allows users to find service providers, view their details, book appointments, and manage their appointments online.

The application is developed using **React, Spring Boot, and MySQL**.

## Features

- User Registration and Login
- Secure password encryption using BCrypt
- Browse service categories
- View available service providers
- View provider details
- Book appointments
- Prevent duplicate booking for the same provider, date, and time
- View personal appointments
- Cancel appointments
- Appointment status management
- Responsive user interface
- RESTful backend APIs

## Categories

AppointEase supports multiple service categories:

- Healthcare
- Beauty & Wellness
- Education & Counseling
- Professional Services
- Home & Repair Services

## Technology Stack

### Frontend
- React.js
- Vite
- React Router
- HTML
- CSS
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- BCrypt Password Encryption

### Database
- MySQL

### Tools
- IntelliJ IDEA
- Visual Studio Code
- MySQL Workbench
- Postman
- Git
- GitHub

## Application Flow

```text
User
  ↓
Register / Login
  ↓
Browse Categories
  ↓
Select Provider
  ↓
View Provider Profile
  ↓
Select Service
  ↓
Select Date & Time
  ↓
Book Appointment
  ↓
My Appointments
  ↓
Cancel Appointment
```

## Project Structure

```text
Online-Appointment-System
│
├── Backend
│   └── Spring Boot Application
│       ├── Controller
│       ├── Service
│       ├── Repository
│       └── Entity
│
└── Frontend
    ├── components
    ├── pages
    ├── services
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## Backend API Endpoints

### User APIs

```text
POST /api/users/register
POST /api/users/login
```

### Provider APIs

```text
GET    /api/providers
GET    /api/providers/{id}
POST   /api/providers
PUT    /api/providers/{id}
DELETE /api/providers/{id}
```

### Appointment APIs

```text
POST /api/appointments
GET  /api/appointments
GET  /api/appointments/user/{userId}
PUT  /api/appointments/{appointmentId}/cancel
PUT  /api/appointments/{appointmentId}/status
```

## Database

The application uses MySQL for storing application data.

Main tables include:

```text
users
providers
categories
services
appointments
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/bommasaniradhika64-dev/Online-Appointment-System.git
```

### 2. Backend Setup

Open the Spring Boot project in IntelliJ IDEA.

Configure MySQL in:

```text
src/main/resources/application.properties
```

Update your MySQL username and password.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/appointment_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Run the Spring Boot application.

Backend will run on:

```text
http://localhost:8080
```

### 3. Frontend Setup

Open the frontend folder in VS Code.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will normally run on:

```text
http://localhost:5173
```

## Testing

The application was tested for:

* Home page navigation
* Category navigation
* Provider listing
* Provider profile
* Login protection
* Appointment booking
* My Appointments
* Appointment cancellation
* Duplicate slot prevention
* Invalid route handling

## Project Highlights

* Full-stack implementation using React and Spring Boot
* REST API based communication between frontend and backend
* MySQL database integration using Spring Data JPA
* BCrypt password encryption
* Protected appointment management
* Duplicate appointment slot prevention
* Responsive and user-friendly interface

## Future Enhancements

Possible future improvements include:

* Provider dashboard
* Admin dashboard
* Provider availability management
* Email/SMS appointment notifications
* Online payment integration
* Appointment reminders
* JWT-based authentication and authorization

## Author

**Radhika Bommasani**

MCA Student

GitHub:
[https://github.com/bommasaniradhika64-dev](https://github.com/bommasaniradhika64-dev)

LinkedIn:
[https://linkedin.com/in/radhika-bommasani](https://linkedin.com/in/radhika-bommasani)


