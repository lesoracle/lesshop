import React, { useEffect, useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState();

  const persistedItems = JSON.parse(localStorage.getItem("cartItems"));

  const [cartItems, setCartItems] = useState([]);

  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setProducts(data.products);
    if (persistedItems) {
      setCartItems(persistedItems);
    }
  }, []);

  const createOrder = (order) => {
    console.log("ORDER : ", order);
  };

  const removeFromCart = (product) => {
    const remCartItems = cartItems.filter((x) => x._id !== product._id);
    setCartItems(remCartItems);
    localStorage.setItem("cartItems", JSON.stringify(remCartItems));
  };

  const addToCart = (product) => {
    const newCartItems = [...cartItems];
    let alreadyInCart = false;
    newCartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      newCartItems.push({ ...product, count: 1 });
    }
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

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
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              createOrder={createOrder}
            />
          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
