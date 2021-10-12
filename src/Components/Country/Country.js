import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, population, flag, region } = props.country;
  return (
    <div className="conutry">
      <h1>this is: {name}</h1>
      <p>
        Capital is: {capital} population: {population}
      </p>
      <p>
        <small>Region: {region}</small>
      </p>

      <img className="country-img" src={flag} alt="country-flag" />
    </div>
  );
};

export default Country;
