import Products from "../components/Products";
import Filter from "../components/Filter";
import Cart from "../components/Cart";

const HomeScreen = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Filter />
          <Products />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
