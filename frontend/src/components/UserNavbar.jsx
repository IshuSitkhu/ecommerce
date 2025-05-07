


import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
      setCartItemCount(cart.length);
    }

    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "Guest");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div style={logoStyle}>
          <Link to="/user-home" style={linkStyle}>TrendyWear</Link> {/* Add a logo or brand */}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="hamburgerMenu" onClick={toggleMenu} style={hamburgerStyle}>
          {isMenuOpen ? '✖' : '☰'} {/* Toggle between hamburger and close icons */}
        </div>

        {/* Links for Desktop and Mobile */}
        <div style={{ ...navLinksContainerStyle, display: isMenuOpen ? 'block' : 'flex' }}>
          <div style={navLinksStyle}>
            <Link to="/user-home" style={linkStyle}>Home</Link>
            <Link to="/men" style={linkStyle}>Men</Link>
            <Link to="/women" style={linkStyle}>Women</Link>
            <Link to="/kids" style={linkStyle}>Kids</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Profile Icon */}
          <div style={profileContainer} className="profileContainer">
            <span role="img" aria-label="user" style={profileIcon}>👤</span>
            <div style={tooltip} className="tooltip">{username}</div>
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <div style={cartIconStyle}>
              🛒 <span>{cartItemCount}</span>
            </div>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = "#5a5a5a"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#333"}
          >
            Logout
          </button>
        </div>
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
  position: "relative", // Ensure navbar doesn't overlap with content
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
};

const navLinksStyle = {
  display: "flex",
  gap: "30px",
  flexDirection: "row", // Default horizontal layout
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

// Extra styles for profile
const profileContainer = {
  position: "relative",
  marginRight: "20px",
  cursor: "pointer",
};

const profileIcon = {
  fontSize: "1.5rem",
  color: "white",
};

const tooltip = {
  position: "absolute",
  bottom: "25px",
  left: "-10px",
  backgroundColor: "white",
  color: "black",
  padding: "5px 10px",
  borderRadius: "4px",
  fontSize: "18px",
  visibility: "hidden", // Hidden by default
  opacity: 0,           // Hidden by default
  transition: "visibility 0s, opacity 0.3s ease", // Ensure smooth transition
};

// Hamburger icon style
const hamburgerStyle = {
  display: "none", // Initially hidden for desktop view
  fontSize: "1.5rem",
  cursor: "pointer",
  color: "#f1f1f1",
};

// Links container style (desktop and mobile)
const navLinksContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row", // Default horizontal layout
  gap: "30px",
};

// Mobile Media Query
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .hamburgerMenu {
      display: block;
      margin-left: auto;
    }
    
    .navLinksContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      background-color: #222;
      padding: 10px;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .navLinksContainer a {
      font-size: 1.1rem;
    }

    .navLinksContainer .hamburgerMenu {
      display: block;
    }

    .navLinksContainer div {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  /* Profile hover style */
  .profileContainer:hover .tooltip {
    visibility: visible !important;
    opacity: 1 !important;
  }
`;
document.head.append(style);

export default UserNavbar;
