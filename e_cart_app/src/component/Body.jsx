import React, { useEffect, useState } from "react";
import Card from "../commonComponent/Card";
// import Shimmer from "../commonComponent/Shimmer";

function Body() {
  const [productsData, setProductsData] = useState([]); // original
  const [tempData, setTempData] = useState([]); // temporary
  const [render, setRender] = useState(false);
  const [inputText, setInputText] = useState("");

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

  // if (productsData.length === 0) {
  //   return (
  //     <div className="skcardHolder">
  //       {Array(8).fill().map(() => <Shimmer/>)}
  //     </div>
  //   )
  // } else {
  return (
    <div className="body">
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
        {tempData.map((product, index) => (
          <Card
            key={`${index}${product.id}`}
            productData={product}
            id={index}
          />
        ))}
      </article>
    </div>
  );
  // }
}

export default Body;
