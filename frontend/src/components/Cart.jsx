import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    calculateTotalPrice(cart);
  }, []);

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <img src={`http://localhost:4000${item.imgurl}`} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>
              Quantity: 
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: '50px', marginLeft: '10px' }}
              />
            </p>
            <button onClick={() => removeItem(item.id)} style={{ backgroundColor: 'red', color: 'white' }}>Remove</button>
          </div>
        ))
      )}
      <div>
        <h3>Total: ₹{totalPrice}</h3>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
