import React from "react";

function Card({ productData }) {
  return (
    <div className="card">
      <img src={productData.thumbnail} className="cardImage" alt="card Image" />
      <p className="cardTitle">
        <span>Name:</span> {productData.title}
      </p>
      <p className="cardPrice">
        <span>Price:</span> {productData.price}
      </p>
      <p className="cardDisc">
        <span>Description:</span> all maintained products
      </p>
    </div>
  );
}

export default Card;
