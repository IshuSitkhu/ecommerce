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

  // const addToCart = async (product) => {
  //   const userId = localStorage.getItem("user_id"); // Make sure this exists
    
    
  //   if (!userId) {
  //     alert("Please log in to add items to the cart");
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post("http://localhost:4000/cart", {
  //       userId: userId,
  //       productId: product.id,
  //       name: product.name,
  //       price: product.price,
  //       image: product.imgurl,
  //     });
  //     console.log(response.data);
  
  //     // Optional local cart update
  //     const updatedCart = [...cart, product];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error adding to cart:", error.response || error);
  //   }
  // };


  const addToCart = async (product) => {
    const userId = localStorage.getItem("user_id");
  
    if (!userId) {
      alert("Please log in to add items to the cart.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4000/cart", {
        userId: userId,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.imgurl,
      });
  
      if (response.status === 200) {
        alert(response.data.message || "Item added to cart!");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Missing required fields");
      } else {
        console.error("Error adding to cart:", error);
        alert("Failed to add item to cart. Please try again.");
      }
    }
  };
  
  
  

  return (
    <div>
      <UserNavbar cart={cart} />
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
                onClick={() => addToCart(product)}
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
