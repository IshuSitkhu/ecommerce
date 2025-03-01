// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await axios.post("http://localhost:5000/login", formData);
      
//       // Save token & user data in localStorage
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" required autoComplete="email"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input type="password" placeholder="Password" required autoComplete="current-password"
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <button type="submit">Login</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// };

// export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
  
      // Store the token and role in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);  // Store the role
  
      // Redirect based on the role
      if (response.data.role === "admin") {
        navigate("/admin-dashboard");  // Navigate to admin dashboard if role is admin
      } else {
        navigate("/user-dashboard");  // Navigate to user dashboard if role is user
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password" // Add autocomplete

        />
        <button type="submit">Login</button>
      </form>

      <p>
          Don't have an account?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
    </div>
  );
};

export default Login;
