const OrderCard = ({order}) => {
  return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
        </div>
      );
}

export default OrderCard