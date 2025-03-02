


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
import UserHome from "./components/UserHome";
import UserNavbar from "./components/UserNavbar";
import AdminNavbar from "./components/AdminNavbar";
import AddItems from "./pages/AddItems";
import ListOfOrders from "./pages/ListOfOrders";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const path = location.pathname;
  
    console.log("Role from localStorage:", role);
    console.log("Current Path:", path);
  
    // Redirect if not logged in and not on login/register
    if (!role && path !== "/login" && path !== "/register") {
      console.log("Redirecting to home due to missing role...");
      navigate("/");
    }
  
    // Ensure correct redirection only after login or register
    if (role === "admin" && (path === "/login" || path === "/register")) {
      console.log("Redirecting admin to Admin Dashboard...");
      navigate("/admin-dashboard");
    } else if (role === "user" && (path === "/login" || path === "/register")) {
      console.log("Redirecting user to User Dashboard...");
      navigate("/user-dashboard");
    }
  }, [navigate, location.pathname]);
  


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
      <Route path="/user-home" element={<UserHome />} />
      <Route path="/user-navbar" element={<UserNavbar />} />
      <Route path="/adminNavbar" element={<AdminNavbar />} />
      <Route path="/additems" element={<AddItems />} />
      <Route path="/listOfOrders" element={<ListOfOrders />} />
    </Routes>
  );
}

export default App;
