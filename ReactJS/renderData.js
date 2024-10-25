import React from '/node_modules/react';
import ReactDOM from '/node_modules/react-dom';

let products = [];

const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    products = data.products;
    updateView();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const updateView = () => {
  const root = ReactDOM.createRoot(document.getElementById('jsxRoot'));
  root.render(<ProductList />);
};

const ProductList = () => (
    <div>
      <h1>Products</h1>
      <ul>
        {products.length ? (
          products.map(item => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );

// Fetch data and render the app
fetchProducts();
