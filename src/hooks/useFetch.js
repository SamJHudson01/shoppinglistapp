import { useState } from "react";

const useFetch = (baseUrl) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/items`);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: item }),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to add item");
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const updateItem = async (id, isComplete) => {
    try {
      const response = await fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isComplete }),
      });
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to update item");
      }
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  return { data, fetchData, addItem, deleteItem, updateItem };
};

export default useFetch;
