import React, { useContext } from "react";
import { apple } from "../util/context";

function Card({ productData }) {
  const { dataName } = useContext(apple);

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
      <p>
        <span>UserName:</span>
        {dataName}
      </p>
    </div>
  );
}

export const WithHeaderCard = (Card) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute p-2 bg-slate-900 text-slate-50">Odd Card</h1>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
