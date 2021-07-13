import React, { useState, useEffect } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Products = (props) => {
  // console.log("PRODUCT PROPS  :", props.products);
  //const { products } = props;

  //const items = useSelector((state) => state.products.items);
  const filtered = useSelector((state) => state.products.filteredItems);
  //console.log("FILTERED  : ", filtered);

  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(null);
  };

  useEffect(() => {}, [filtered]);

  return (
    <div>
      <Fade bottom cascade>
        {!filtered ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {filtered &&
              filtered.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => openModal(product)}
                    >
                      <img src={product.image} alt={product.title} />
                      <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="button primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </Fade>
      {product && (
        <Modal isOpen={true} ariaHideApp={false} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title} />
              <div className="product-details-description">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <p>
                  Available Sizes:
                  {product.availableSizes.map((x) => (
                    <span key={x}>
                      {" "}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      dispatch(addToCart(product));
                      closeModal();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
