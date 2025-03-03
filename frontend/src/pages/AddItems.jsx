
import { useState } from "react";
import React from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const AddItems = () => {
  // Initialize form data
  const [formData, setFormData] = useState({ name: "", category: "", price: "", image: null });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(null); // Success state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    // Handle file input separately
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.category || !formData.price || !formData.image) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("image", formData.image); // Send file

      const response = await axios.post("http://localhost:4000/addItems", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Item added successfully!");
      setFormData({ name: "", category: "", price: "", image: null }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || "Error adding item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <AdminNavbar />
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add New Item</h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
        <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={formData.category} 
          onChange={handleChange} 
          required 
          style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          value={formData.price} 
          onChange={handleChange} 
          required 
          style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
        
        {/* File upload */}
        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          onChange={handleChange} 
          required 
          style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />

        <button 
          type="submit" 
          disabled={loading} 
          style={{
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#0089", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer", 
            transition: "background-color 0.3s ease"
          }}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItems;
