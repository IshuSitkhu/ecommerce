import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddItems from "./pages/AddItems";
import Cart from "./pages/Cart"; // Import the Cart component
import UserNavbar from "./components/UserNavbar"; // Import Navbar
import UserHome from "./components/UserHome";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const path = location.pathname;

    // If no token and not on login/register page, go to home
    if (!token && path !== "/login" && path !== "/register") {
      navigate("/");
      return;
    }

    // Redirect to dashboard if already logged in
    if (token && role === "admin" && path === "/login") {
      navigate("/admin-dashboard");
    } else if (token && role === "user" && path === "/login") {
      navigate("/user-dashboard");
    }

  }, [navigate, location.pathname]);


  // useEffect(() => {
  //   const role = localStorage.getItem("role");
  //   const token = localStorage.getItem("token");
  //   const path = location.pathname;
  
  //   console.log("Role from localStorage:", role);
  //   console.log("Token from localStorage:", token);
  //   console.log("Current Path:", path);
  
  //   if (!token && path !== "/login" && path !== "/register") {
  //     console.log("Redirecting to home due to missing authentication...");
  //     navigate("/");
  //     return;
  //   }
  
  //   if (token) {
  //     if (role === "admin" && path === "/login") {
  //       console.log("Redirecting admin to Admin Dashboard...");
  //       navigate("/admin-dashboard");
  //     } else if (role === "user" && path === "/login") {
  //       console.log("Redirecting user to User Dashboard...");
  //       navigate("/user-dashboard");
  //     }
  //   }
  // }, [navigate, location.pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/additems" element={<AddItems />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user-home" element={<UserHome/>} />
      


    </Routes>
  );
}

export default App;
