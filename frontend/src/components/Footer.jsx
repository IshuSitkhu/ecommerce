// import React from 'react'

// const Footer = () => {
//   return (
   
//     <footer className="bg-gray-800 text-white p-6 mt-16">
//       <div className="container mx-auto flex justify-between">
//         <p>&copy; 2025 Fashion Store. All Rights Reserved.</p>
//         <ul className="flex space-x-6">
//           <li className="hover:underline cursor-pointer">Privacy Policy</li>
//           <li className="hover:underline cursor-pointer">Terms & Conditions</li>
//           <li className="hover:underline cursor-pointer">Contact Us</li>
//         </ul>
//       </div>
//     </footer>

//   )
// }

// export default Footer
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        marginTop: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p>&copy; 2025 Fashion Store. All Rights Reserved.</p>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Privacy Policy
          </li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Terms & Conditions
          </li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>
            Contact Us
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
