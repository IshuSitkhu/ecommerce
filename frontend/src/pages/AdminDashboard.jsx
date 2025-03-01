import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><a href="/additems">Add Items</a></li>
          <li><a href="/listoforders">List of Orders</a></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
