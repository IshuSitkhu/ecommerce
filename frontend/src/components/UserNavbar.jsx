// // import React from 'react'
// // import { Link, useNavigate } from "react-router-dom";


// // const UserNavbar = () => {

// //      const navigate = useNavigate();
    
// //       const handleLogout = () => {
// //         localStorage.removeItem("token");
// //         localStorage.removeItem("role");
// //         navigate("/login");
// //       };
// //   return (
// //     <div>
// //        <nav>
// //         <Link to="/user-Home">Home</Link>
// //         <Link to="/men">Men</Link>
// //         <Link to="/women">Women</Link>
// //         <Link to="/kids">Kids</Link>
// //         <Link to="/about">About</Link>
// //         <Link to="/contact">Contact</Link>
// //         <button onClick={handleLogout}>Logout</button>
// //       </nav>
// //     </div>
// //   )
// // }

// // export default UserNavbar


// import React from 'react';
// import { Link, useNavigate } from "react-router-dom";

// const UserNavbar = () => {

//   const navigate = useNavigate();
  
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "#118999" }}>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <Link to="/user-Home" style={linkStyle}>Home</Link>
//           <Link to="/men" style={linkStyle}>Men</Link>
//           <Link to="/women" style={linkStyle}>Women</Link>
//           <Link to="/kids" style={linkStyle}>Kids</Link>
//           <Link to="/about" style={linkStyle}>About</Link>
//           <Link to="/contact" style={linkStyle}>Contact</Link>
//         </div>
//         <button
//           onClick={handleLogout}
//           style={buttonStyle}
//           onMouseOver={(e) => e.target.style.backgroundColor = "#555"}
//           onMouseOut={(e) => e.target.style.backgroundColor = "black"}
//         >
//           Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// // Inline CSS styles
// const linkStyle = {
//   color: "white",
//   textDecoration: "none",
//   fontSize: "1rem",
//   fontWeight: "500",
//   transition: "color 0.3s ease",
// };

// const buttonStyle = {
//   padding: "8px 16px",
//   backgroundColor: "black",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
//   transition: "background-color 0.3s ease",
//   fontWeight: "bold",
// };

// export default UserNavbar;
import React from 'react';
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
      <nav style={navbarStyle}>
        <div style={navLinksStyle}>
          <Link to="/user-Home" style={linkStyle}>Home</Link>
          <Link to="/men" style={linkStyle}>Men</Link>
          <Link to="/women" style={linkStyle}>Women</Link>
          <Link to="/kids" style={linkStyle}>Kids</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
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
  // color: "",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  fontWeight: "bold",
};

export default UserNavbar;
