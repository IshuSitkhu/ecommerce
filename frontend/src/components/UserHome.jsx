
import Footer from "../components/Footer";
import UserNavbar from "./UserNavbar";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";



const HeroSection = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("./images/HeroSection.jpeg")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "black",
          marginBottom: "16px",
        }}
      >
        Discover Your Perfect Look
      </h1>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4a4a4a")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
      >
        Shop Now
      </button>
    </div>
  );
};

const LatestCollections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for Women category
    axios
      .get("http://localhost:4000/products") // Make sure to update the URL to match your API endpoint
      .then((response) => {
        setProducts(response.data); // Set the products fetched from the backend
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Latest Collections
      </h3>
      <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Auto fill with responsive columns
            gap: "32px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "white",
                padding: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <img
                src={`http://localhost:4000${product.imgurl}`} // Assuming `product.img` has the image URL from the backend
                alt={product.name}
                style={{
                  width: "100%",
                  height: "256px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginTop: "16px",
                }}
              >
                {product.name} {/* Dynamic product name */}
              </h4>
              <p
                style={{
                  color: "#4a4a4a",
                  fontSize: "1rem",
                  marginTop: "8px",
                }}
              >
                {product.price} {/* Dynamic product price */}
              </p>
              <button
                style={{
                  marginTop: "16px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#4a4a4a")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};

const UserHome = () => {
  return (
    <div>
      <UserNavbar />
      <HeroSection />
      <LatestCollections />
      <Footer />
    </div>
  );
};

export default UserHome;
