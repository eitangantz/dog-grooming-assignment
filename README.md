Markdown
## Appointment Management System ##

**Overview**

This project is a web application designed to manage appointments. Users can register, log in, create, edit, and delete their own appointments. The system ensures data privacy by only allowing users to access their information. The backend is built with **.NET 8** and the frontend utilizes **React**.

### Tech Stack

* **Backend:** .NET 8 (Web API)
* **Frontend:** React (with Axios for API requests)
* **Database:** Microsoft SQL Server
* **Authentication:** JWT (JSON Web Token)
* **Styling:** Basic CSS (expand for more advanced styling)

### Features

* **User Authentication:** Register and log in with JWT-based authentication.
* **Appointment Management:** Create, edit, and delete appointments.
* **Appointment Listing:** View a list of all user appointments.
* **Filtering:** Filter appointments by date or customer name.
* **Secure Access:** Only users can edit/delete their own appointments.

## Project Structure

חשוב להשתמש בקוד בזהירות.

appointment-management-system/
backend/  # .NET 8 Web API for backend logic
frontend/ # React frontend for UI


## Prerequisites

* **Node.js** (v16.x or v18.x LTS recommended)
* **.NET 8 SDK**
* **Microsoft SQL Server**

## Getting Started

### Backend Setup

1. **Navigate to the backend directory:**

```bash
cd appointment-management-system/backend
Restore dependencies:
Bash
dotnet restore
חשוב להשתמש בקוד בזהירות.

Update appsettings.json:

Update the ConnectionStrings section with your SQL Server connection string.
Run migrations (to set up the database):

Bash
dotnet ef database update
חשוב להשתמש בקוד בזהירות.

Run the backend server:
Bash
dotnet run
חשוב להשתמש בקוד בזהירות.

The backend should be accessible on http://localhost:5000 (default port).
Frontend Setup
Navigate to the frontend directory:
Bash
cd appointment-management-system/frontend
חשוב להשתמש בקוד בזהירות.

Install dependencies:
Bash
npm install
חשוב להשתמש בקוד בזהירות.

Run the frontend server:
Bash
npm start
חשוב להשתמש בקוד בזהירות.

The frontend should be accessible on http://localhost:3000 (default port).
API Endpoints
Authentication

POST /api/authentication/register: Register a new user.
Request body:
JSON
{
  "Username": "your_username",
  "Password": "your_password",
  "FirstName": "Your Name" (optional)
}
חשוב להשתמש בקוד בזהירות.

POST /api/authentication/login: Log in and retrieve a JWT token.
Request body:
JSON
{
  "Username": "your_username",
  "Password": "your_password"
}
חשוב להשתמש בקוד בזהירות.

Appointments

GET /api/appointments (optional query parameters for filtering by customerName and date): Retrieve all appointments for the logged-in user.
POST /api/appointments: Add a new appointment.
Request body:
JSON
{
  "CustomerName": "Customer's Name",
  "ScheduledTime": "YYYY-MM-DDTHH:MM:SS" (e.g., "2024-09-22T10:00:00")
}
חשוב להשתמש בקוד בזהירות.

PUT /api/appointments/{id}: Update an existing appointment.
Request body (same as POST /api/appointments)
DELETE /api/appointments/{id}: Delete an appointment by its ID.
Running Tests
To run unit tests for the backend, navigate to the backend directory and run:

Bash
dotnet test
חשוב להשתמש בקוד בזהירות.

Deployment
Backend:

You can deploy the .NET backend to any cloud provider that supports .NET Core, such as Azure, AWS, or Heroku.

Frontend:

The React frontend can be deployed to services like Vercel, Netlify, or any static hosting service.
