import React from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css";

const ShoppingList = ({ items, onDelete, onMarkComplete }) => {
  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;
