import React from "react";
import { useNavigate } from "react-router-dom";
   
const UserDashboard = () => {
    const role = localStorage.getItem("role");  // Get role from localStorage
  
    console.log("Role from localStorage:", role);  // Check if the role is being retrieved correctly
  
    if (role !== "user") {
      // Redirect if the user role is not "user"
      return <div>You are not authorized to view this page.</div>;
    }
  
      const navigate = useNavigate();
    

    const handleLogout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/login");
          };
        
          return (
            <div>
              <h2>User Dashboard</h2>
              <nav>
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/men">Men</a></li>
                  <li><a href="/women">Women</a></li>
                  <li><a href="/kids">Kids</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </nav>
            </div>
          );
        };
        
  
export default UserDashboard;

