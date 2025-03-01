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

      const response = await axios.post("http://localhost:5000/addItems", formDataToSend, {
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
    <div>
      <AdminNavbar/>
      <h2>Add New Item</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />

        {/* File upload */}
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItems;
