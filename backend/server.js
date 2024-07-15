require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const aboutRoutes = require("./routes/aboutRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONOGO_DB_END_POINT)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use("/api/about", aboutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
