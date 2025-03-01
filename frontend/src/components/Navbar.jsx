// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>My E-commerce</h1>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>My E-commerce</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>  {/* Ensure this is correct */}
    </nav>
  );
};

export default Navbar;
