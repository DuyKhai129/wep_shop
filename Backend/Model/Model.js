const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: { type: String },
    number: { type: Number },
    category: { type: String },
  },
  { timestamps: true }
);

let Product = mongoose.model("product", productSchema);

module.exports = { Product };
