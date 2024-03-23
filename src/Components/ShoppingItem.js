import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = ({ item, onDelete, onMarkComplete }) => {
  return (
    <li
      className={`shopping-item ${item.isComplete ? "complete" : ""}`}
      onClick={(e) => {
        if (e.target.tagName !== "BUTTON") {
          onMarkComplete(item.id);
        }
      }}
    >
      <span>{item.name}</span>
      <button onClick={() => onDelete(item.id)}></button>
    </li>
  );
};

export default ShoppingItem;
