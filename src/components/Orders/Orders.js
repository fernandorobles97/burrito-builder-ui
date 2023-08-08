import React from "react";
import "./Orders.css";
import OrderCard from "../OrderCard/OrderCard";

const Orders = ({ orderData }) => {

  const orderEls = orderData.map(order => <OrderCard key={order.id} order={order} />)

  return (
    <section className="order-wrapper">
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </section>
  );
};

export default Orders;
