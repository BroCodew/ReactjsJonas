import { useState } from "react";

/* eslint-disable no-unused-vars */

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [item, setItem] = useState([]);
  const handleItem = (item) => {
    setItem((items) => [...items, item]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <PackingList item={item} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log("handleItem", onAddItem);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trips</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, key) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
      />
      <button>ADD</button>
    </form>
  );
}
function PackingList({ item }) {
  return (
    <div className="list">
      <ul>
        {item.map((item, key) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list, and you already packed x(X%)</em>
    </footer>
  );
}
