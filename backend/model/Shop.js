const { request } = require("express");
const mongoose = require("mongoose");


const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    require
  },
  price : {
    type: Number,
    require
  },
  imgUrl : {
    type: String ,
    require
  }
})

module.exports = mongoose.model("Shop", shopSchema);
