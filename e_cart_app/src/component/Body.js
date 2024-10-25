import React, { useState } from "react";
import Card from "../commonComponent/Card";
import products from "../util/mockData";

function Body() {
  const [productsData, setProductsData] = useState(products);
  return (
    <div className="body">
      <article className="search">
        <button onClick={() => {
          const filteredData = products.filter(product => product.price < 500);
          setProductsData(filteredData);
        }}>
          Less than 500/-
        </button>
        <button onClick={() => {
          const filteredData = products.filter(product => product.price < 10000);
          setProductsData(filteredData);
        }}>
          Less than 10000/-
        </button>
      </article>
      <article className="cardHolder">
        {productsData.map(product => (
          <Card key={product.id} data={product}/>
        ))}
      </article>
    </div>
  );
}

export default Body;
