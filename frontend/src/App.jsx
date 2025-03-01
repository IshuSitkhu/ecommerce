// // import React from "react";
// // import {  Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Register from "./pages/Register";
// // import Login from "./pages/Login";

// // function App() {
// //   return (
// //     <>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/login" element={<Login />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;

// //yo git ma hale paxi ko . sabai milira xa tara login paxi dashboard ma nagako
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import PrivateRoute from "./pages/PrivateRoute";  // Import PrivateRoute

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
      
//       {/* Protect Admin Dashboard */}
//       <Route 
//         path="/admin-dashboard" 
//         element={
//           <PrivateRoute allowedRole="admin">
//             <AdminDashboard />
//           </PrivateRoute>
//         }
//       />
      
//       {/* Protect User Dashboard */}
//       <Route 
//         path="/user-dashboard" 
//         element={
//           <PrivateRoute allowedRole="user">
//             <UserDashboard />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./pages/PrivateRoute";  // Import PrivateRoute

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "user") {
      navigate("/user-dashboard");
    } else {
      navigate("/login");  // Default to login if no role is found
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
