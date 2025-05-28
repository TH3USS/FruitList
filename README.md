# 🍍 Fruit List

This project consists of a fruit registration list developed with REACT and .NET.

## **Project Structure**

> Below is the organization of the structure used in the project, showing the layout of the main scripts and files:

### Backend

For the backend, an ASP.NET API was developed that acts as an intermediary between the database and the frontend. The API was divided into three main parts: the Model, which holds the database table structure; the Controller, which performs the executions and code; and the ApplicationDbContext, which connects to the database.

<pre>
├── Back-End
    ├── .vs
    │   ├── FruitList
    |   │── Controllers/
    |   │   └── FruitController.cs      # Controller that defines the API routes
    |   │── Models/
    |   │   └── Fruit.cs                 # Data model
    |   │── Data/
    |   │   └── ApplicationDbContext.cs  # Database context
    |   │── Program.cs                   # Main API configuration
    |   └── appsettings.json             # General settings (includes Connection String)
</pre>

### Frontend

For the frontend, Vite was used to create the project.

<pre>
├── Front-End
    ├── fruit-app
    │   frontend/
    │   │── src/
    │   │   ├── App.css              # Stylesheet file
    │   │   ├── App.jsx              # Main component, file for API calls
    │   │   ├── assets
    │   │   │   └── react.svg
    │   │   ├── index.css
    │   │   └── main.jsx
    │   └── vite.config.js           # Vite configuration
    └── package-lock.json            # Project dependencies
</pre>

---

# **🔹 Step-by-Step to Run the Project**

## **1️⃣ Prerequisites**

Before starting, you need to have installed on your system:
✅ **.NET SDK** → [Download .NET](https://dotnet.microsoft.com/en-us/download)
✅ **Node.js + npm** → [Download Node.js](https://nodejs.org/)
✅ **Git** (to clone the project) → [Download Git](https://git-scm.com/downloads)

---

## **2️⃣ Clone the Repository**

Open Git Bash and run:

```sh
git clone https://github.com/TH3USS/FruitList.git
```

---

## **3️⃣ Configure the Database**

* Download and install **SQL Server Express**.

---

## **4️⃣ Run the Backend**

### 📌 In CMD go to the Back-End folder and run:

```sh
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```

This will rebuild the project, create the database in your local SQL Server, and run the backend.

---

## **5️⃣ Run the Frontend**

Now, still in CMD, navigate to the fruit-app folder inside Front-End, and run:

```sh
npm install
npm run dev
```

This will install the dependencies and start the frontend.

---

If **everything is running, and the frontend appears without errors**, your project is set up successfully! 🚀🎉

---

# **🔥 Summary of Commands**

```sh
# Clone the project
git clone https://github.com/TH3USS/FruitList.git

# Run Backend
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run

# Run Frontend
npm install
npm run dev
```

---

# **📌 Technologies and Tools Used**

## **1️⃣ Frontend - React.js**

The frontend was developed using **React.js**, a JavaScript library for building modern and dynamic interfaces.

### 🔹 **Main Frontend Technologies**

✅ **React.js** → Library for building reactive interfaces.
✅ **Vite** → Tool for a fast development environment.
✅ **CSS** → Application styling.
✅ **Fetch API / Axios** → Communication with backend via REST API.

---

## **2️⃣ Backend - .NET 8 (C#)**

For the backend, an API was developed to communicate between the database and the user interface using **ASP.NET Core 8**, a robust framework for building performant and secure APIs.

### 🔹 **Main Backend Technologies**

✅ **ASP.NET Core 8** → Framework for building APIs.
✅ **Entity Framework Core** → ORM for database management.
✅ **Swagger (Swashbuckle)** → Interactive API documentation.

---

## **3️⃣ Database - SQL Server**

The project uses **SQL Server**, a Microsoft relational database.

### 🔹 **Tools and Resources Used**

✅ **SQL Server Express** → Free version of the database.
✅ **SQL Server Management Studio (SSMS)** → Tool to manage the database.
✅ **Entity Framework Core (Migrations)** → Creation and management of the database.

---

## **5️⃣ Auxiliary Tools**

Besides the main technologies, some tools were used to optimize development:

✅ **Git & GitHub** → Version control and collaboration.
✅ **Visual Studio Code** → IDE for frontend development.
✅ **Visual Studio** → IDE for backend development.

---

# **🚀 Conclusion**

The project uses **modern and efficient technologies**, ensuring **high performance, scalability, and ease of maintenance**. With the integration of **React on the frontend, .NET on the backend, and SQL Server as the database**, the application delivers a smooth and reliable user experience.
