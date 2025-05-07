


// import { useEffect, useState } from "react";
// import axios from "axios";
// import UserNavbar from "../components/UserNavbar";
// import Footer from "../components/Footer";
// import React from "react";

// const Kids = () => {
//   const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]); // Added state to hold cart items
  

//   useEffect(() => {
//     // Fetch products for Women category
//     axios
//       .get("http://localhost:4000/products/Kids") // Make sure to update the URL to match your API endpoint
//       .then((response) => {
//         setProducts(response.data); // Set the products fetched from the backend
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   const addToCart = async (product) => {
//     const userId = localStorage.getItem("user_id");
  
//     if (!userId) {
//       alert("Please log in to add items to the cart.");
//       return;
//     }
  
//     try {
//       const response = await axios.post("http://localhost:4000/cart", {
//         userId: userId,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.imgurl,
//       });
  
//       if (response.status === 200) {
//         alert(response.data.message || "Item added to cart!");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         alert("Missing required fields");
//       } else {
//         console.error("Error adding to cart:", error);
//         alert("Failed to add item to cart. Please try again.");
//       }
//     }
//   };

//   return (
//     <div>
//       <UserNavbar />
//       <div className="container mx-auto py-16 my-8">
//         <h3 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "24px" }}>
//           kid's Collection
//         </h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Auto fill with responsive columns
//             gap: "32px",
//           }}
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
//               style={{
//                 backgroundColor: "white",
//                 padding: "16px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "8px",
//               }}
//             >
//               <img
//                 src={`http://localhost:4000${product.imgurl}`} // Assuming `product.img` has the image URL from the backend
//                 alt={product.name}
//                 style={{
//                   width: "100%",
//                   height: "256px",
//                   objectFit: "cover",
//                   borderRadius: "8px",
//                 }}
//               />
//               <h4
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   marginTop: "16px",
//                 }}
//               >
//                 {product.name} {/* Dynamic product name */}
//               </h4>
//               <p
//                 style={{
//                   color: "#4a4a4a",
//                   fontSize: "1rem",
//                   marginTop: "8px",
//                 }}
//               >
//                 {product.price} {/* Dynamic product price */}
//               </p>
//               <button
//                 style={{
//                   marginTop: "16px",
//                   backgroundColor: "black",
//                   color: "white",
//                   padding: "8px 16px",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = "#4a4a4a")}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
//                 onClick={() => addToCart(product)} 
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Kids;


import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import React from "react";
import { useNavigate } from "react-router-dom";

const Kids = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Added state to hold cart items
  const navigate = useNavigate(); // For redirecting to order confirmation

  useEffect(() => {
    // Fetch products for Kids category
    axios
      .get("http://localhost:4000/products/Kids")
      .then((response) => {
        setProducts(response.data); // Set the products fetched from the backend
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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

  const buyNow = async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      alert("Please log in to place an order.");
      return;
    }
  
    const orderItems = cart.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));
  
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const paymentMethod = "Cash on Delivery"; // Assuming this is the chosen method
  
    // Log request body
    console.log({
      userId,
      totalAmount,
      paymentMethod,
      orderItems
    });
  
    try {
      const response = await axios.post("http://localhost:4000/orders", {
        userId,
        totalAmount,
        paymentMethod,
        orderItems
      });
  
      if (response.status === 200) {
        alert("Order placed successfully");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };
  
  
  

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto py-16 my-8">
        <h3 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "24px" }}>
          kid's Collection
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
                ₹{product.price} {/* Dynamic product price */}
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
              <button
                style={{
                  marginTop: "16px",
                  backgroundColor: "green",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#4a4a4a")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
                onClick={() => buyNow(product)} // Directly place the order
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kids;
