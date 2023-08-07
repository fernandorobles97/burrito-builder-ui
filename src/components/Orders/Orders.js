import React from "react";
import "./Orders.css";
import OrderCard from "../OrderCard/OrderCard";

const Orders = ({ orderData }) => {

  const orderEls = orderData.map(order => <OrderCard key={order.id} order={order} />)
  // const orderEls = orderData.orders.map((order) => {
  //   return (
  //     <div className="order">
  //       <h3>{order.name}</h3>
  //       <ul className="ingredient-list">
  //         {order.ingredients.map((ingredient) => {
  //           return <li>{ingredient}</li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // });

  return (
    <section className="order-wrapper">
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </section>
  );
};

export default Orders;
