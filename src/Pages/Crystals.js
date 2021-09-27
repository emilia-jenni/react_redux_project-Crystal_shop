import React from "react";
import Product from "../Components/Crystal";

const Crystals = (crystals) => {
  return (
    <div>
      {crystals.map((c) => (
        <Product
          key={c.id}
          name={c.title}
          img={c.image}
          description={c.description}
          price={c.price}
        />
      ))}
    </div>
  );
};

export default Crystals;
