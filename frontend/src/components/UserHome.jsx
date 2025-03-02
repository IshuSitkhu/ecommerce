// import Footer from "../components/Footer";
// import UserNavbar from "./UserNavbar";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div
//       className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
//       style={{
//         backgroundImage: 'url("./images/HeroSection.jpeg")',
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <h1 className="text-4xl font-bold text-black mb-4">Discover Your Perfect Look</h1>
//       <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700">
//         Shop Now
//       </button>
//     </div>
//   );
// };

// const LatestCollections = () => {
//   const products = [
//     { id: 1, name: "Men's Jacket", price: "$50", img: "/men-jacket.jpg" },
//     { id: 2, name: "Women's Dress", price: "$45", img: "/women-dress.jpg" },
//     { id: 3, name: "Kids T-Shirt", price: "$20", img: "/kids-tshirt.jpg" },
//   ];

//   return (
//     <div className="container mx-auto py-16">
//       <h3 className="text-3xl font-semibold text-center mb-8">Latest Collections</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded-md"
//             />
//             <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
//             <p className="text-gray-600">{product.price}</p>
//             <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const UserHome = () => {
//   return (
//     <div>
//         <UserNavbar/>
//       <HeroSection />
//       <LatestCollections />
//       <Footer />
//     </div>
//   );
// };

// export default UserHome;
import Footer from "../components/Footer";
import UserNavbar from "./UserNavbar";
import React from "react";

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
  const products = [
    { id: 1, name: "Men's Jacket", price: "$50", img: "/men-jacket.jpg" },
    { id: 2, name: "Women's Dress", price: "$45", img: "/women-dress.jpg" },
    { id: 3, name: "Kids T-Shirt", price: "$20", img: "/kids-tshirt.jpg" },
  ];

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
              src={product.img}
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
