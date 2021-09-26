import React from "react";
import Product from "../Components/Product";

const Products = (products) => {
  return (
    <div>
      {products.map((p) => (
        <Product
          key={p.id}
          name={p.title}
          img={p.image}
          description={p.description}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default Products;
