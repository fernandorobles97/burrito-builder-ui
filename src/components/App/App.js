import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    getOrders()
    .then(data => setOrderData(data.orders))
    .catch(err => alert(err))
  }, []);

  console.log('out',orderData)

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm  />
      </header>

      <Orders orderData={orderData} />
    </main>
  );
}

export default App;
