const express = require("express");
const Shop = require("../model/Shop");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, price, imgUrl } = req.body;

    const shop = new Shop({name, price, imgUrl})
    await shop.save()
    res.status(200).json(shop)
  } catch (er) {
    res.status(400).send("some error occured");
  }
});

module.exports = router;
