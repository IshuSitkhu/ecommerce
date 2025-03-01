import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const AdminNavbar = () => {
    const navigate = useNavigate();
    
      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
      };

  return (
    <div>
       <nav>
       
          <Link to ="/additems">Add Items</Link>
          <Link to ="/listoforders">List of Orders</Link>
          <button onClick={handleLogout}>Logout</button>
      
      </nav>
    </div>
  )
}

export default AdminNavbar
