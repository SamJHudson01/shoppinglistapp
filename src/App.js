import React, { useState, useEffect } from "react";
import ShoppingList from "./Components/ShoppingList";
import AddItemForm from "./Components/AddItemForm";
import { database } from "./APIs/firebase";
import { ref, set, onValue, remove, update } from "firebase/database";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const itemsData = await onValue(ref(database, "items"), (snapshot) => {
        if (snapshot.exists()) {
          setItems(Object.values(snapshot.val()));
        } else {
          setItems([]);
        }
      });
    };

    fetchData();
  }, []);

  const addItem = (item) => {
    const newItemRef = ref(database, "items/" + Date.now());
    set(newItemRef, {
      id: Date.now(),
      name: item,
      isComplete: false,
    });
  };

  const deleteItem = (id) => {
    console.log(id);
    remove(ref(database, `items/${id}`))
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const markComplete = (id) => {
    items.forEach((item) => {
      if (item.id === id) {
        update(ref(database, `items/${item.id}`), {
          isComplete: !item.isComplete,
        });
      }
    });
  };

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <ShoppingList
        items={items}
        onDelete={deleteItem}
        onMarkComplete={markComplete}
      />
      <AddItemForm onAdd={addItem} />
    </div>
  );
};

export default App;
