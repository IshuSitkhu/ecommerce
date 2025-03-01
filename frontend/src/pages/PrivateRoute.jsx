// // import { Route, Navigate } from "react-router-dom";

// // const PrivateRoute = ({ children, allowedRole }) => {
// //   const role = localStorage.getItem("role");
  
// //   // Check if the user is authenticated and has the correct role
// //   if (!localStorage.getItem("token") || role !== allowedRole) {
// //     return <Navigate to="/login" />;
// //   }

// //   return children;
// // };

// // export default PrivateRoute;
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children, allowedRole }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   // If no token or role doesn't match, redirect to login page
//   if (!token || role !== allowedRole) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;


import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ allowedRole, children }) => {
  const role = localStorage.getItem("role");

  if (!role || role !== allowedRole) {
    return <Navigate to="/login" />; // Redirect if not logged in or role doesn't match
  }

  return children; // Render the children if the role matches
};

export default PrivateRoute;
