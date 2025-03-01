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
      const response = await axios.post("http://localhost:5000/register", formData);
      setSuccess(response.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required autoComplete="username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input type="email" placeholder="Email" required autoComplete="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input type="password" placeholder="Password" required autoComplete="new-password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default Register;
