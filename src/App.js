import React, { useEffect } from "react";
import ShoppingList from "./Components/ShoppingList";
import AddItemForm from "./Components/AddItemForm";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const { data: items, fetchData, addItem, deleteItem, updateItem } = useFetch(baseUrl);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <ShoppingList
        items={items}
        onDelete={(id) => deleteItem(id)}
        onMarkComplete={(id) => {
          const item = items.find((item) => item.id === id);
          updateItem(id, !item.isComplete);
        }}
      />
      <AddItemForm onAdd={(item) => addItem(item)} />
    </div>
  );
};

export default App;
