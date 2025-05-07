


import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#222", padding: "10px 0" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link
          to="/additems"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Add Items
        </Link>
        <Link
          to="/listoforders"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          List of Orders
        </Link>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "white",
            // color: "",
            border: "none",
            padding: "8px 15px",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};


const linkStyle = {
  color: "#f1f1f1", // Lighter text color
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "600", // Bold font for better visibility
  transition: "color 0.3s ease",
};

export default AdminNavbar;
