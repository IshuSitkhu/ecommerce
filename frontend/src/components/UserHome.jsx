import Footer from "../components/Footer";
import UserNavbar from "./UserNavbar";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("./images/HeroSection.jpeg")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-black mb-4">Discover Your Perfect Look</h1>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700">
        Shop Now
      </button>
    </div>
  );
};

const LatestCollections = () => {
  const products = [
    { id: 1, name: "Men's Jacket", price: "$50", img: "/men-jacket.jpg" },
    { id: 2, name: "Women's Dress", price: "$45", img: "/women-dress.jpg" },
    { id: 3, name: "Kids T-Shirt", price: "$20", img: "/kids-tshirt.jpg" },
  ];

  return (
    <div className="container mx-auto py-16">
      <h3 className="text-3xl font-semibold text-center mb-8">Latest Collections</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />
            <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
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
        <UserNavbar/>
      <HeroSection />
      <LatestCollections />
      <Footer />
    </div>
  );
};

export default UserHome;
