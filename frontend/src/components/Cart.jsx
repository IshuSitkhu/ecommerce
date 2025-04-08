


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("user_id");
//     console.log("Logged in user ID:", storedUserId);
//     if (!storedUserId) {
//       console.log("User not logged in");
//       return;
//     }

//     setUserId(storedUserId);

//     // Fetch cart items for the user
//     axios
//       .get(`http://localhost:4000/cart/${storedUserId}`)
//       .then((response) => {
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart:", error);
//       });
//   }, []);

//   // Function to update cart (quantity or remove item)
//   const updateCart = (productId, quantity) => {
//     if (quantity === 0) {
//       // Remove the product from cart
//       axios
//         .delete(`http://localhost:4000/cart/${userId}/${productId}`)
//         .then((response) => {
//           setCartItems(cartItems.filter(item => item.productId !== productId)); // Fix: changed `id` to `productId`
//           alert("Item removed from cart!"); // Replace toast with alert for simplicity
//         })
//         .catch((error) => {
//           console.error("Error removing item from cart:", error);
//         });
//     } else {
//       // Update the product quantity in cart
//       axios
//         .put(`http://localhost:4000/cart/${userId}/${productId}`, { quantity })
//         .then((response) => {
//           const updatedCart = cartItems.map(item => 
//             item.productId === productId ? { ...item, quantity } : item // Fixed property name here as well
//           );
//           setCartItems(updatedCart);
//           alert("Cart updated!"); // Replace toast with alert for simplicity
//         })
//         .catch((error) => {
//           console.error("Error updating cart:", error);
//         });
//     }
//   };

//   // Calculate total price based on quantity and price
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={`${item.productId}`} className="mb-4 p-4 border rounded-lg">
//             <img
//               src={`http://localhost:4000${item.image}`}
//               alt={item.name}
//               style={{ width: "100px", height: "100px", objectFit: "cover" }}
//             />
//             <h3>{item.name}</h3>
//             <p>Price: ₹{item.price}</p>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => updateCart(item.productId, item.quantity + 1)}
//                 className="bg-green-500 text-white p-2 rounded"
//               >
//                 Add
//               </button>
//               <button
//                 onClick={() => updateCart(item.productId, item.quantity - 1)}
//                 className="bg-red-500 text-white p-2 rounded"
//                 // Remove the disable condition to always allow removal
//               >
//                 Remove
//               </button>
//               <span>Quantity: {item.quantity}</span>
//             </div>
//           </div>
//         ))
//       )}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold">Total: ₹{getTotalPrice()}</h3>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    console.log("Logged in user ID:", storedUserId);
    if (!storedUserId) {
      console.log("User not logged in");
      return;
    }

    setUserId(storedUserId);

    axios
      .get(`http://localhost:4000/cart/${storedUserId}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
      });
  }, []);

  const updateCart = (productId, quantity) => {
    if (quantity === 0) {
      axios
        .delete(`http://localhost:4000/cart/${userId}/${productId}`)
        .then(() => {
          setCartItems(cartItems.filter(item => item.productId !== productId));
          alert("Item removed from cart!");
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    } else {
      axios
        .put(`http://localhost:4000/cart/${userId}/${productId}`, { quantity })
        .then(() => {
          const updatedCart = cartItems.map(item =>
            item.productId === productId ? { ...item, quantity } : item
          );
          setCartItems(updatedCart);
          alert("Cart updated!");
        })
        .catch((error) => {
          console.error("Error updating cart:", error);
        });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    cartItem: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    price: {
      color: '#555',
      marginTop: '8px',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginTop: '10px',
    },
    button: {
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    addButton: {
      backgroundColor: 'green',
      color: 'white',
    },
    removeButton: {
      backgroundColor: 'red',
      color: 'white',
    },
    total: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.productId} style={styles.cartItem}>
            <img
              src={`http://localhost:4000${item.image}`}
              alt={item.name}
              style={styles.image}
            />
            <div style={styles.itemInfo}>
              <div style={styles.itemName}>{item.name}</div>
              <div style={styles.price}>Price: ₹{item.price}</div>
              <div style={styles.controls}>
                <button
                  style={{ ...styles.button, ...styles.addButton }}
                  onClick={() => updateCart(item.productId, item.quantity + 1)}
                >
                  Add
                </button>
                <button
                  style={{ ...styles.button, ...styles.removeButton }}
                  onClick={() => updateCart(item.productId, item.quantity - 1)}
                >
                  Remove
                </button>
                <span>Quantity: {item.quantity}</span>
              </div>
            </div>
          </div>
        ))
      )}
      <div style={styles.total}>
  Total: ₹{getTotalPrice()}
</div>

{/* Buy Now Button */}
<div style={{ marginTop: '20px', textAlign: 'right' }}>
  <button
    style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    }}
    onClick={() => alert("Proceeding to payment...")}
  >
    Buy Now
  </button>
</div>

    </div>
  );
};

export default Cart;

