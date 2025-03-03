import { useEffect, useState } from "react"; 
import axios from "axios"; 
import UserNavbar from "../components/UserNavbar"; 
import Footer from "../components/Footer"; 
import React from "react";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products for Men category
    axios
      .get("http://localhost:4000/products/Men")
      .then((response) => {
        setProducts(response.data); // Set the products fetched from the backend
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Load cart from localStorage on page load (optional)
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // const addToCart = (product) => {
  //   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   existingCart.push(product);
  //   localStorage.setItem("cart", JSON.stringify(existingCart)); // Save updated cart in localStorage
  
  //   // Optionally update the cart count in Navbar
  //   alert(`${product.name} added to cart!`);
  // };
  
  const addToCart = (product) => {
    const existingCart = [...cart]; // Copy current cart state
    const existingProduct = existingCart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
  
    // Update state and localStorage
    setCart(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  
    alert(`${product.name} added to cart!`);
  };
  
  

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto py-16 my-8">
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Men's Collection
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
                src={`http://localhost:4000${product.imgurl}`}
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
                {product.name}
              </h4>
              <p
                style={{
                  color: "#4a4a4a",
                  fontSize: "1rem",
                  marginTop: "8px",
                }}
              >
                {product.price}
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
  onClick={() => addToCart(product)} // Add to cart onClick
>
  Add to Cart
</button>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
