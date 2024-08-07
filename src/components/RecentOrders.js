// RecentOrders.js
import React from "react";
import "../styles/RecentOrders.css";

const orders = [
  {
    customer: "Wade Warren",
    orderId: "1456230",
    amount: "$123.00",
    status: "Pending",
  },
  {
    customer: "Jane Cooper",
    orderId: "4355670",
    amount: "$45.50",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderId: "7896532",
    amount: "$98.60",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderId: "2096522",
    amount: "$84.90",
    status: "Delivered",
  },
  {
    customer: "Cody Fisher",
    orderId: "9711230",
    amount: "$101.40",
    status: "Pending",
  },
  {
    customer: "Savannah Nguyen",
    orderId: "7516643",
    amount: "$120.20",
    status: "Delivered",
  },
];

const RecentOrders = () => (
  <div className="recent-orders">
    <h2>Recent Orders</h2>
    <ul>
      {orders.map((order, index) => (
        <li key={index}>
          <div className="customer">
            <img
              src={`https://i.pravatar.cc/40?img=${index + 1}`}
              alt="profile"
            />
            <span>{order.customer}</span>
          </div>
          <div className="id">
            <span>{order.orderId}</span>
          </div>
          <div className="amt">
            <span>{order.amount}</span>
          </div>
          <div className="status">
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentOrders;
