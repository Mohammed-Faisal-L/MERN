import React, { useEffect, useState } from "react";
import Card, { WithHeaderCard } from "../commonComponent/Card";
import Shimmer from "../commonComponent/Shimmer";
import axios from "axios";

function Body() {
  const [productsData, setProductsData] = useState([]); // original
  const [tempData, setTempData] = useState([]); // temporary
  const [render, setRender] = useState(false);
  const [inputText, setInputText] = useState("");

  const CardEnhanced = WithHeaderCard(Card);

  const fetchData = async () => {
    try {
      // Await the result of the axios call
      const response = await axios.get("https://dummyjson.com/carts");

      // Extract and transform data directly from response
      const fetchedData = response.data.carts;
      const actualData = fetchedData.flatMap((cart) => cart.products);

      // Set both `productsData` and `tempData` to `actualData`
      setProductsData(actualData);
      setTempData(actualData); // Assuming `tempData` is meant to store the original data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [render]); // Dependency array to re-run `fetchData` when `render` changes

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
