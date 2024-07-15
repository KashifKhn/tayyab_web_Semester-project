/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

const ShopItemList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/shop");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="row">
      {data.map((item) => (
        <>
          <ShopItem
            key={item._id}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        </>
      ))}
    </div>
  );
};

export default ShopItemList;
