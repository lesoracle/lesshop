import React, { useEffect, useState } from "react";
import data from "./data.json";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState();
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setProducts(data.products);
  }, []);

  //console.log("console :", products);
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
