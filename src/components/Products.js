import React from "react";
import formatCurrency from "../util";

const Products = (props) => {
  console.log("propsher :", props.products);
  const { products } = props;

  return (
    <div>
      <ul className="products">
        {products &&
          products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                </div>
                <button
                  onClick={() => props.addToCart(product)}
                  className="button primary"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
