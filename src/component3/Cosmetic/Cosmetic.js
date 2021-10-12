import React from "react";
import { addDb, deleteFromDB } from "../utilitis/fakedb";

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  const handlePurchase = (id) => {
    // set to localStorage
    console.log(id);
    addDb(id);
  };
  const handleRemove = (id) => {
    deleteFromDB(id);
  };
  return (
    <div>
      <h1>Product Name: {name}</h1>
      <h4>
        Id: {id} Price: {price}
      </h4>
      <button onClick={() => handlePurchase(id)}>Purchase</button>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
