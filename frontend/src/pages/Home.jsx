import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <>
      
      <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#222",
        padding: "10px 20px",
       
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px" }}>TrendyWear</h1>
      <div>
        <Link
          to="/login"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
          }}
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
    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <h1 style={{ fontSize:"91px",alignItems: "center",}}>Welcome to E-commerces Website</h1>;
  </>
};

export default Home;
