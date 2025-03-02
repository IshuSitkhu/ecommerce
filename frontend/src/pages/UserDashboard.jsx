// import React from "react";
// import UserNavbar from "../components/UserNavbar";
// import { Route } from "react-router-dom";
// import UserHome from "../components/UserHome";

// const UserDashboard = () => {
//   const role = localStorage.getItem("role"); // Get role from localStorage

//   console.log("Role from localStorage:", role); // Check if the role is being retrieved correctly

//   if (role !== "user") {
//     return <div>You are not authorized to view this page.</div>;
//   }

 

//   return (
//     <div>
   
//             {/* <UserNavbar/> */}
//             <UserHome/>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useEffect, useState } from "react";
import UserHome from "../components/UserHome";

const UserDashboard = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || "guest");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    console.log("🔹 Role retrieved from localStorage:", storedRole);
    console.log("🔹 Type of role:", typeof storedRole);
    
    setRole(storedRole);
  }, []);

  console.log("📌 Final Role in State:", role);
  console.log("📌 Current Path:", window.location.pathname);

  if (role !== "user") {
    console.log("🚫 Unauthorized access. Redirecting...");
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div>
      <UserHome />
    </div>
  );
};

export default UserDashboard;
