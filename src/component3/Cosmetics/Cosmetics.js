import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetic] = useState([]);

  useEffect(() => {
    fetch("./cosmetics.json")
      .then((res) => res.json())
      .then((data) => setCosmetic(data));
  }, []);
  return (
    <div>
      <h3>Shop my Cosmetics</h3>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic} key={cosmetic.id} />
      ))}
    </div>
  );
};

export default Cosmetics;
