import React from "react";
import Price from "../Price/Price";

const Phone = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello from Phone</h1>
      <h4>Mobile Name: {props.phoneName} </h4>
      <p>Model Number: {props.model}</p>
      <Price price="10000" title={props.title} />
    </div>
  );
};

export default Phone;
