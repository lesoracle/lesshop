import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, sortProducts } from "../redux/actions/productActions";

const Filter = (props) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.products.items);
  const filtered = useSelector((state) => state.products.filteredItems);

  return (
    <div className="filter">
      <div className="filter-result">{props.count} Products</div>
      <div className="filter-sort">
        Order{" "}
        <select
          value={props.sort}
          onChange={(e) => dispatch(sortProducts(filtered, e.target.value))}
        >
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select
          value={props.size}
          onChange={(e) => dispatch(filterProducts(items, e.target.value))}
        >
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
