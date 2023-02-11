import React, { useState } from "react";
import "./AddItemForm.css";

const AddItemForm = ({ onAdd }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(item);
    setItem("");
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button type="submit" disabled={!item} className={"submit-button"}>
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
