import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListOfOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the database
    axios
      .get('http://localhost:4000/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Total Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user_id}</td>
              <td>{order.total_amount}</td>
              <td>{order.payment_method}</td>
              <td>{order.order_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfOrders;
