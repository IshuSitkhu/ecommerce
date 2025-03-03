import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <>
      <h1>Welcome to Home Page</h1>;
      <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#222",
        padding: "10px 20px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px" }}>My E-commerce</h1>
      <div>
        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
            fontSize: "18px",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  </>
};

export default Home;
