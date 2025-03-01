import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import React from "react";

const Kids = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/Kids") // Fetch products for Kids
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  
  

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto py-16 my-8">
        <h3 className="text-3xl font-semibold text-center mb-8">Kid's Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={`http://localhost:5000${product.imgurl}`} // Ensure correct image path
                alt={product.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
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

export default Kids;
