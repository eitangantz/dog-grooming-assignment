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
2. **restore dependencies**:

   ```bash
   dotnet restore
3. **Update appsettings.json**
   ```bash
   {
  "ConnectionStrings": {
    "DefaultConnection": "Server=your_server_name;Database=DogGroomingDB;Trusted_Connection=True;"
  }
}```bash


4.  **Run migrations**:

