import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orderData, setOrderData] = useState([])
  const [newOrder, setNewOrder] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOrders()
    .then(data => setOrderData(data.orders))
    .catch(err => alert(err))
    setLoading(false)
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
      {loading && <h2>Loading</h2>}
      <Orders orderData={orderData} />
    </main>
  );
}

export default App;
