import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cart.length);
  }, []);
  

  return (
    <div>
      <nav style={navbarStyle}>
        <div style={navLinksStyle}>
          <Link to="/user-home" style={linkStyle}>Home</Link>
          <Link to="/men" style={linkStyle}>Men</Link>
          <Link to="/women" style={linkStyle}>Women</Link>
          <Link to="/kids" style={linkStyle}>Kids</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
        <Link to="/cart">
          <div className="cart-icon" style={cartIconStyle}>
            🛒 <span>{cartItemCount}</span>
          </div>
        </Link>
        <button
          onClick={handleLogout}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = "#5a5a5a"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#333"}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

// Inline CSS styles
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  backgroundColor: "#222", // Dark background color
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
};

const navLinksStyle = {
  display: "flex",
  gap: "30px",
};

const linkStyle = {
  color: "#f1f1f1", // Lighter text color
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "600", // Bold font for better visibility
  transition: "color 0.3s ease",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "white", // Dark background color for the button
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  fontWeight: "bold",
};

// Styling for the cart icon
const cartIconStyle = {
  display: "flex",
  alignItems: "center",
  color: "#f1f1f1", // Cart icon color
  fontSize: "1.2rem",
  fontWeight: "600",
};

export default UserNavbar;
