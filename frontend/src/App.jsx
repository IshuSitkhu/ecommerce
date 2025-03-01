

// import React from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import PrivateRoute from "./pages/PrivateRoute";  // Import PrivateRoute

// function App() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const role = localStorage.getItem("role");
//     if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else if (role === "user") {
//       navigate("/user-dashboard");
//     } else {
//       navigate("/login");  // Default to login if no role is found
//     }
//   }, [navigate]);

//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/user-dashboard" element={<UserDashboard />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard />} />
//     </Routes>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const path = window.location.pathname;

    // Do not redirect if the user is on login or register page
    if (!role && path !== "/login" && path !== "/register") {
      navigate("/home");  // Redirect to home if no role is found and not on login/register pages
    }

    // Redirect logged-in users based on their role
    if (role) {
      if (path === "/login" || path === "/register") {
        // Prevent navigating to login/register if already logged in
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "user") {
          navigate("/user-dashboard");
        }
      } else if (role === "admin" && path !== "/admin-dashboard") {
        navigate("/admin-dashboard");
      } else if (role === "user" && path !== "/user-dashboard") {
        navigate("/user-dashboard");
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
