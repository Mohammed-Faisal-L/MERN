import React, { useContext, useEffect, useRef, useState } from "react";
import Card, { WithHeaderCard } from "../commonComponent/Card";
import Shimmer from "../commonComponent/Shimmer";
import { apple } from "../util/context";

function Body() {
  const [productsData, setProductsData] = useState([]); // original
  const [tempData, setTempData] = useState([]); // temporary
  const [render, setRender] = useState(false);
  const [inputText, setInputText] = useState("");

  const { dataName, changeData } = useContext(apple);

  const refVal = useRef(null);
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const CardEnhanced = WithHeaderCard(Card);

  const fetchData = async () => {
    const url = "https://dummyjson.com/carts";
    const response = await fetch(url);
    const jsonData = await response.json();
    const cartData = jsonData.carts.map((cart) => cart.products);
    const actualData = cartData.flat();
    setProductsData(actualData);
    setTempData(actualData); // Set both to original data initially
  };

  useEffect(() => {
    fetchData();
  }, [render]);

  if (productsData.length === 0) {
    return (
      <div className="skcardHolder">
        {Array(8)
          .fill()
          .map(() => (
            <Shimmer />
          ))}
      </div>
    );
  } else {
    return (
      <div className="body">
        <label>This is to update the context value</label>
        <input
          type="text"
          value={dataName}
          className="p-2 m-2 border"
          onChange={(e) => changeData(e.target.value)}
        />
        <div>
          <p className="m-2 text-lg">useState count:{count}</p>
          <p className="m-2 text-lg">previous count:{prevCount.current}</p>
          <button
            className="p-2 m-2 bg-lime-400 text-zinc-100"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click to update the count
          </button>
        </div>
        <div>
          <input ref={refVal} placeholder="ref input type" type="text" />
          <button
            className="m-2 p-2 bg-amber-300 text-slate-100 rounded-lg"
            onClick={(e) => {
              refVal.current.focus();
            }}
          >
            Click me to focus
          </button>
        </div>
        <article className="search">
          <input
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            placeholder="Enter Your Search"
          />
          <button
            onClick={() => {
              const filteredData = productsData.filter((product) => {
                let upperCaseTitle = product.title.toUpperCase();
                let upperCaseInputText = inputText.toUpperCase();
                return upperCaseTitle.includes(upperCaseInputText);
              });
              setTempData(filteredData);
            }}
          >
            Search
          </button>
          <button onClick={() => setRender((prevRender) => !prevRender)}>
            Reload
          </button>
          <button
            onClick={() => {
              const filteredData = productsData.filter(
                (product) => product.price < 500
              );
              setTempData(filteredData); // Use tempData to store filtered data
            }}
          >
            Less than 500/-
          </button>
          <button
            onClick={() => {
              const filteredData = productsData.filter(
                (product) => product.price < 1000
              );
              setTempData(filteredData); // Use tempData to store filtered data
            }}
          >
            Less than 1000/-
          </button>
        </article>
        <article className="cardHolder">
          {tempData.map((product, index) =>
            index % 2 !== 0 ? (
              <Card
                key={`${index}${product.id}`}
                productData={product}
                id={index}
              />
            ) : (
              <CardEnhanced
                key={`${index}${product.id}`}
                productData={product}
                id={index}
              />
            )
          )}
        </article>
      </div>
    );
  }
}

export default Body;
