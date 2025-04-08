

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post("http://localhost:4000/login", { email, password });
  
  //     localStorage.setItem("token", response.data.token);
  //     localStorage.setItem("role", response.data.role);  
  //     localStorage.setItem("username", response.data.username); // from API

  
  //     if (response.data.role === "admin") {
  //       navigate("/admin-dashboard");  
  //     } else {
  //       navigate("/user-dashboard");  
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.message || "An error occurred");
  //   }
  // };
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password
      });
  
      // ✅ Save data to localStorage
      localStorage.setItem("user_id", response.data.userId); // this is correct
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
  
      // ✅ Navigate based on role
      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#118999", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Login
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/register")} style={{ color: "#118999", cursor: "pointer", textDecoration: "underline" }}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;