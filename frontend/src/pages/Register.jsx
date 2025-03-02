// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "user" });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.post("http://localhost:4000/register", formData);
//       setSuccess(response.data.message);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" required autoComplete="username"
//         onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//       />
//       <input type="email" placeholder="Email" required autoComplete="email"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input type="password" placeholder="Password" required autoComplete="current-password"
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit">Register</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </form>
//     <p>
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/login")}>
//             Login here
//           </span>
//         </p>
//       </div>
   
//   );
// };

// export default Register;
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "user" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:4000/register", formData);
      setSuccess(response.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
        <input 
          type="text" 
          placeholder="Username" 
          required 
          autoComplete="username"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          required 
          autoComplete="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          required 
          autoComplete="current-password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <select 
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          style={{ padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button 
          type="submit" 
          style={{ padding: "10px", backgroundColor: "#118999", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Register
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "#118999" }}>{success}</p>}
      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")} style={{ color: "#118999", cursor: "pointer", textDecoration: "underline" }}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;