# Dog Grooming Management System

## Overview

The **Dog Grooming Management System** allows users to register, log in, and manage their dog grooming appointments. Users can add, edit, and delete their own appointments, while ensuring data privacy. The system is built using a **.NET 8** backend and a **React** frontend.

### Tech Stack

- **Backend**: .NET 8 (ASP.NET Web API)
- **Frontend**: React (with Axios for API requests)
- **Database**: Microsoft SQL Server
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Basic CSS (You can expand this based on your styling choices)

## Features

- **User Authentication**: Register and log in with JWT authentication.
- **Manage Appointments**: Users can create, edit, and delete their own appointments.
- **Appointment Listing**: Displays a list of all user appointments.
- **Filtering**: Filter appointments by date or customer name.
- **Secure Access**: Only the owner of the appointments can edit or delete them.

## Project Structure

/dog-grooming-project /dog-grooming-backend # .NET 8 Web API for backend logic /dog-grooming-frontend # React frontend for UI

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.x or v18.x LTS recommended)
- **.NET 8 SDK**
- **SQL Server**

## Getting Started

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd dog-grooming-backend
Restore dependencies:

   ```bash
dotnet restore
Update appsettings.json:

Update the appsettings.json file with your SQL Server connection string:

json
Copy code
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=your_server_name;Database=DogGroomingDB;Trusted_Connection=True;"
  }
}
Run migrations to set up the database:

   ```bash

dotnet ef database update
Run the backend server:

   ```bash
dotnet run
The backend should be running on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

   ```bash
cd dog-grooming-frontend
Install dependencies:

   ```bash
npm install
Run the frontend server:

   ```bash
npm start
The frontend should be running on http://localhost:3000.

API Endpoints
Authentication
POST /api/authentication/register: Register a new user.

Request body:

json
{
  "Username": "john_doe",
  "PasswordHash": "password123",
  "FirstName": "John"
}
POST /api/authentication/login: Log in a user and return a JWT token.

Request body:

json
{
  "Username": "john_doe",
  "PasswordHash": "password123"
}
Appointments
GET /api/appointments: Retrieve all appointments (optionally filterable by customerName and date).

POST /api/appointments: Add a new appointment.

Request body:

json
{
  "CustomerName": "Sparky",
  "ScheduledTime": "2024-09-22T14:00:00"
}
PUT /api/appointments/{id}: Update an existing appointment.

Request body:

json
{
  "CustomerName": "Buddy",
  "ScheduledTime": "2024-09-23T16:00:00"
}
DELETE /api/appointments/{id}: Delete an appointment by its ID.
