

import { useState } from "react";
import React from "react";
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear error if validation passes

    // Here, you can send data to the backend
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <UserNavbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          Contact Us
        </h2>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            {error && (
              <p
                style={{
                  color: "#E53E3E",
                  marginBottom: "16px",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {error}
              </p>
            )}

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  marginBottom: "16px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  marginBottom: "16px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  marginBottom: "16px",
                  backgroundColor: "#f9f9f9",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#118999",
                color: "#fff",
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "1.125rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0a6c6f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#118999")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
