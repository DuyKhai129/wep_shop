const { Category, Product } = require("../Model/Model");
const ProductController = {
  //ADD
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product({ ...req.body });
      const saved = await newProduct.save();
      if (req.body.category) {
        const product = Category.findById(req.body.category);
        await product.updateOne({ $push: { product: saved._id } });
      }
      res.status(200).json({
        messenger: "success",
        response: saved,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL
  getAllProduct: async (req, res, next) => {
    try {
      const allProducts = await Product.find().populate("category");
      res.status(200).json({
        messenger: "success",
        response: allProducts,
      });
    } catch (err) {
      next(err);
    }
  },
  //get detail
  getProductDetail: async (req, res, next) => {
    try {
      const product_detail = await Product.findOne({
        _id: req.params.id,
      });
      res.status(200).json({
        messenger: "success",
        response: product_detail,
      });
    } catch (err) {
      next(err);
    }
  },

  //UPDATE
  updateProduct: async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      const newProduct = await product.updateOne({ $set: req.body });
      res.status(200).json({
        messenger: "success",
        response: newProduct,
      });
    } catch (err) {
      next(err);
    }
  },
  //DELETE
  deleteProduct: async (req, res, next) => {
    try {
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      if (deleteProduct) {
        await Category.updateMany(
          { job: req.params.id },
          { $pull: { job: req.params.id } }
        );
        res.status(200).json({
          messenger: "success",
          response: deleteProduct,
        });
      } else {
        return res.status(403).json({
          messenger: "error",
        });
      }
    } catch (err) {
      next(err);
    }
  },
};
module.exports = ProductController;
