

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
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids"
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserHome from "./components/UserHome";
import UserNavbar from "./components/UserNavbar";
import AdminNavbar from "./components/AdminNavbar";
import AddItems from "./pages/AddItems";
import ListOfOrders from "./pages/ListOfOrders";

function App() {
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const path =  location.pathname;

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
      // } else if (role === "admin" && path !== "/admin-dashboard") {
      //   navigate("/admin-dashboard");
      // } else if (role === "user" && path !== "/user-dashboard") {
      //   navigate("/user-dashboard");
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
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/user-home" element={<UserHome />} />
      <Route path="/user-Navbar" element={<UserNavbar />} />
      <Route path="/adminNavbar" element={<AdminNavbar />} />
      <Route path="/additems" element={<AddItems />} />
      <Route path="/listOfOrders" element={<ListOfOrders />} />

    </Routes>
  );
}

export default App;
