import React from "react";
import UserNavbar from "../components/UserNavbar";

const UserDashboard = () => {
  const role = localStorage.getItem("role"); // Get role from localStorage

  console.log("Role from localStorage:", role); // Check if the role is being retrieved correctly

  if (role !== "user") {
    return <div>You are not authorized to view this page.</div>;
  }

 

  return (
    <div>
      
            <UserNavbar/>
    </div>
  );
};

export default UserDashboard;
