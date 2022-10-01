const { Category, Product } = require("../Model/Model");

const categoryController = {
  //GET ALL
  getAllCategory: async (req, res, next) => {
    try {
      const allCategory = await Category.find().sort("id");
      res.status(200).json({
        messenger: "success",
        response: allCategory,
      });
    } catch (err) {
      next(err);
    }
  },
  //ADD
  addCategory: async (req, res) => {
    try {
      const newCategory = new Category({ ...req.body });
      const saved = await newCategory.save();
      res.status(200).json({
        messenger: "success",
        response: saved,
      });
    } catch (err) {
      next(err);
    }
  },
  //UPDATE
  updateCategory: async (req, res, next) => {
    try {
      const category = await Category.findById(req.params.id);
      const newCategory = await category.updateOne({ $set: req.body });
      res.status(200).json({
        messenger: "success",
        response: newCategory,
      });
    } catch (err) {
      next(err);
    }
  },

  //Get detail product by idCategory
  getProductByIdCategory: async (req, res, next) => {
    try {
      const products = await Category.findOne({
        _id: req.params.id,
      }).populate("product");
      res.status(200).json({
        status: "success",
        response: products,
      });
    } catch (err) {
      next(err);
    }
  },

  //DELETE
  deleteCategory: async (req, res, next) => {
    try {
      const deleteCategory = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json({
        messenger: "success",
        response: deleteCategory,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categoryController;
