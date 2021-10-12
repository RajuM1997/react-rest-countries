import React from "react";

const Price = (props) => {
  return (
    <div>
      <h2>Price</h2>
      <p>Price: {props.price}</p>
      <p>
        <small>Sub title: {props.title}</small>
      </p>
    </div>
  );
};

export default Price;
