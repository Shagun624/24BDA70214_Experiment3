import React from "react";
import "../App.css";

const ProductCard = ({ name, price, img, inStock, onAddToCart }) => {
  return (
    <div className="card">

      {/* Product Image */}
      <img src={img} alt={name} />

      <h3>{name}</h3>
      <p>${price}</p>

      {/* Stock Status */}
      <span className={inStock ? "in" : "out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      {/* Button */}
      <button onClick={onAddToCart} disabled={!inStock}>
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>

    </div>
  );
};

export default ProductCard;