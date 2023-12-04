import { useState } from "react";

/* eslint-disable no-unused-vars */

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [item, setItem] = useState(initialItems);

  const handleAddItem = (item) => {
    setItem((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    const itemDelete = item.filter((item) => item.id !== id);
    setItem(itemDelete);
  };

  // const checkedItem = item.map((item) => item.id === id ? item.packed === !item.packed : item)
  // setItem(checkedItem);
  const handleToggle = (id) => {
    console.log("id", id);
    setItem((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggle}
      />
      <Stats item={item} />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
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
function PackingList({ item, onDeleteItem, onToggle }) {
  const [sortBy, setSortBy] = useState("input");

  const handleSelectSort = (e) => {
    console.log("e.target.value", e.target.value);
    setSortBy(e.target.value);
    // sortData(sortBy);
  };
  let dataList;
  // const sortData = (key) => {
  //   dataList = [...item].sort((a, b) => a[key] - b[key]);
  // };
  if(sortBy === "input") {
    dataList = item;
  }

  return (
    <div className="list">
      <ul>
        {dataList?.map((item, key) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSelectSort}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} style={{ color: "red" }}>
        X
      </button>
    </li>
  );
}
function Stats({ item }) {
  const numItem = item.length;
  return (
    <footer className="stats">
      <em>You have X item on your list, and you already packed x(X%)</em>
    </footer>
  );
}
