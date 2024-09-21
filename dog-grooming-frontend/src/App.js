import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return (
      <div>
        <Login setToken={setToken} />
        <Register />
      </div>
    );
  }

  return <Dashboard token={token} />;
}

export default App;
