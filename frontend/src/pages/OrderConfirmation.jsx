import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ total, cartItems }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setLoading(true);
    
    // Prepare order data to save in DB
    const orderData = {
      userId: localStorage.getItem('user_id'),
      items: cartItems,
      totalAmount: total,
      paymentMethod: 'Cash on Delivery', // COD option
      orderStatus: 'Pending', // Initial status
    };

    // Send order data to the backend to save the order in the database
    axios
      .post('http://localhost:4000/orders', orderData)
      .then((response) => {
        console.log('Order placed:', response.data);
        setLoading(false);
        navigate('/order-success');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Order Confirmation</h2>
      <p>Total: ₹{total}</p>
      <p>Payment Method: Cash on Delivery</p>
      <button 
        onClick={handlePlaceOrder} 
        disabled={loading} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
};

export default OrderConfirmation;
