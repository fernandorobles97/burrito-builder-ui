import { useEffect, useState } from "react";
import "./App.css";
import getOrders from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";


// Iteration 3
// Add functionality to enable form submission only when at least one ingredient and a name have been added to the order. If either of these two requirements is missing, the form should not be submittable. Upon successful submission, a POST request should be made to the server.

// New orders should only be displayed on the page IF the POST request is successful. The user should see the new order displayed without the page refreshing. The new order should persist on the DOM after refreshing as well.

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
