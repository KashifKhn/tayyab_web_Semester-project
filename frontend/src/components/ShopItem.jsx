/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ShopItem = ({ imgUrl, price, name }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <a className="product-item" href="#">
        <img src={imgUrl} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{name}</h3>
        <strong className="product-price">{price} $</strong>
        <span className="icon-cross">
          <img src="images/cross.svg" className="img-fluid" />
        </span>
      </a>
    </div>
  );
};

export default ShopItem;
