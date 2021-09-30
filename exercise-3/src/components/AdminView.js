import React, { useState } from "react";

export default function AdminView(props) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemManufature, setNewItemManufature] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemRating, setNewItemRating] = useState("");
  const [newItemPromos, setNewItemPromos] = useState("");

  const addNewItem = () => {
    props.addNewItem(
      newItemName,
      newItemManufature,
      newItemPrice,
      newItemRating,
      newItemPromos
    );
  };

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  };

  return (
    <div>
      <div>
        <h1>Add new item</h1>
        <div>
          Name{" "}
          <input
            type="text"
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </div>
        <div>
          Manufacturer{" "}
          <input
            type="text"
            onChange={(event) => setNewItemManufature(event.target.value)}
          />
        </div>
        <div>
          Price{" "}
          <input
            type="text"
            onChange={(event) => setNewItemPrice(event.target.value)}
          />
        </div>
        <div>
          Promos{" "}
          <input
            type="text"
            onChange={(event) => setNewItemPromos(event.target.value)}
          />
        </div>
        <div>
          Rating{" "}
          <input
            type="text"
            onChange={(event) => setNewItemRating(event.target.value)}
          />
        </div>
        <button onClick={addNewItem}>Add Item</button>
      </div>
      <button onClick={props.disableAdminMode}>Disable Admin Mode</button>

      <h1>List of items</h1>
      {props.items.map((item, index) => (
        <div key={index}>
          <button onClick={() => onDeleteItemClick(item.id)}>X</button>{" "}
          {item.name}, {item.author}, {item.price}
        </div>
      ))}
    </div>
  );
}
