import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const UserNavbar = () => {

     const navigate = useNavigate();
    
      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
      };
  return (
    <div>
       <nav>
        <Link to="/user-Home">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default UserNavbar
