
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        marginTop: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p>&copy; 2025 Fashion Store. All Rights Reserved.</p>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Privacy Policy
          </li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Terms & Conditions
          </li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Contact Us
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
