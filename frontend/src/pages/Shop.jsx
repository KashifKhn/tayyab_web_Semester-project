import React from "react";
import ShopItemList from "../components/ShopItemList";

const Shop = () => {
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <ShopItemList />
        </div>
      </div>
    </>
  );
};

export default Shop;
