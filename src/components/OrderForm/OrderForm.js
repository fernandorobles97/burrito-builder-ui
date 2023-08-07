import { useState } from "react";

function OrderForm({ addOrder }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      name: name, 
      ingredients: ingredients,
    }
    if (name && ingredients.length) {
      addOrder(newOrder)
      clearInputs();
      setError(false)
    } else {
      setError(true)
    }
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

      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit Order</button>
      {error && <h3>Please enter your first name and select at least one ingredient</h3>}
    </form>
  );
}

export default OrderForm;
