// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const sto#222User = localStorage.getItem("user");
//     if (!sto#222User) {
//       navigate("/login");
//     } else {
//       setUser(JSON.parse(sto#222User));
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Welcome, {user?.username}!</h2>
//       <p>Email: {user?.email}</p>
//       <p>Role: {user?.role}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
