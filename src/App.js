import React, { useEffect, useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  const [products, setProducts] = useState();
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const sortProducts = (event) => {
    console.log("sort : ", event.target.value);
    const sort = event.target.value;
    setSort(sort);
    const sortedProducts = products
      .slice()
      .sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      );
    setProducts(sortedProducts);
  };

  const filterProducts = (event) => {
    console.log("size : ", event.target.value);

    if (event.target.value === "") {
      setSize(event.target.value);
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      const filteredProducts = data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      );
      console.log("filtered :", filteredProducts);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products && products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
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
