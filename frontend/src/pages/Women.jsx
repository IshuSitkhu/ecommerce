// import { useEffect, useState } from "react";
// import axios from "axios";
// import UserNavbar from "../components/UserNavbar";
// import Footer from "../components/Footer";
// import React from "react";

// const Women = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/products/Women") // Fetch products for Women
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);
  

//   return (
//     <div>
//       <UserNavbar />
//       <div className="container mx-auto py-16 my-8">
//         <h3 className="text-3xl font-semibold text-center mb-8">Women's Collection</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
//               <img
//                 src={`http://localhost:4000${product.imgurl}`} // Ensure correct image path
//                 alt={product.name}
//                 className="w-full h-64 object-cover rounded-md"
//               />
//               <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
//               <p className="text-gray-600">${product.price}</p>
//               <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
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

// export default Women;


import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import React from "react";

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for Women category
    axios
      .get("http://localhost:4000/products/Women") // Make sure to update the URL to match your API endpoint
      .then((response) => {
        setProducts(response.data); // Set the products fetched from the backend
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto py-16 my-8">
        <h3 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "24px" }}>
          Women's Collection
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
      <Footer />
    </div>
  );
};

export default Women;
