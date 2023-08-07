import { useState } from "react";


// Iteration 3
// Add functionality to enable form submission only when at least one ingredient and a name have been added to the order. If either of these two requirements is missing, the form should not be submittable. Upon successful submission, a POST request should be made to the server.

// New orders should only be displayed on the page IF the POST request is successful. The user should see the new order displayed without the page refreshing. The new order should persist on the DOM after refreshing as well.

function OrderForm({ addOrder }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      name: name, 
      ingredients: ingredients,
      id: Date.now()
    }
    addOrder(newOrder)
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];

  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        value={ingredient}
        name={ingredient}
        onClick={(e) => {
          e.preventDefault()
          setIngredients([...ingredients, e.target.value])
        }}
      >
        {ingredient}
      </button>
    );
  });

  console.log('ingredients',ingredients)

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
