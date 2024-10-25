import React from "react";

function Card({ data }) {
  return (
    <div key={data.key} className="card">
      <img src={data.thumbnail} className="cardImage" alt="card Image" />
      <p className="cardTitle">
        <span>Name:</span> {data.title}
      </p>
      <p className="cardPrice">
        <span>Price:</span> {data.price}
      </p>
      <p className="cardDisc">
        <span>Description:</span> all maintained vintage car
      </p>
    </div>
  );
}

export default Card;
