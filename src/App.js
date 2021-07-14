import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Link to="/">React Shopping Cart</Link>
          <Link to="/admin">Admin</Link>
        </header>
        <main>
          <Route path="/admin" component={AdminScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer>All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
