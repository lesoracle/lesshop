import React, { useEffect } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
