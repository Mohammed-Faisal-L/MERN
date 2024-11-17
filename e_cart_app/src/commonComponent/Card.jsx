import React, { useContext } from "react";
import { apple } from "../util/context";
import { useDispatch } from "react-redux";
import { addItem } from "../util/redux/slices/cartSlice";

function Card({ productData }) {
  const { dataName, age, school } = useContext(apple);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={productData.thumbnail} className="cardImage" alt="card Image" />
      <button
        onClick={() => {
          dispatch(addItem(productData));
        }}
        className="bg-black text-white p-1 ps-4 pe-4 m-1 rounded-lg"
      >
        Add+
      </button>
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
      <p>
        <span>Age:</span>
        {age}
      </p>
      <p>
        <span>School:</span>
        {school}
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
