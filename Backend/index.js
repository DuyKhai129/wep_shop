var bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// Import routers

const productRoutes = require("./Routes/Product");
//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "25mb" }));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello Henry!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
