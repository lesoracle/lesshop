import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";

function App() {
  const [products, setProducts] = useState();

  //const persistedItems = JSON.parse(localStorage.getItem("cartItems"));

  const [cartItems, setCartItems] = useState([]);

  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  //const items = useSelector((state) => state.products.items);
  //const filtered = useSelector((state) => state.products.filteredItems);
  //console.log("ITEMS1 : ", items);

  useEffect(() => {
    dispatch(fetchProducts());

    // if (persistedItems) {
    //   setCartItems(persistedItems);
    // }
  }, [dispatch]);

  const createOrder = (order) => {
    console.log("ORDER : ", order);
  };

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
