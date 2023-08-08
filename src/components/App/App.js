import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orderData, setOrderData] = useState([])
  const [newOrder, setNewOrder] = useState('')

  useEffect(() => {
    getOrders()
    .then(data => setOrderData(data.orders))
    .catch(err => alert(err))
  }, []);

  const addOrder = (order) => {
    setNewOrder(order)
  }

  useEffect(() => {
    if(newOrder) {
      setOrderData([...orderData, newOrder])
      postOrder(newOrder)
      .catch(err => alert(err))
      setNewOrder('')
    }
  }, [newOrder])


  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder} />
      </header>
      <Orders orderData={orderData} />
    </main>
  );
}

export default App;
