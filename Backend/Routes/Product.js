const productController = require("../Controller/productController");

const router = require("express").Router();

//GET all
router.get("/", productController.getAllProduct);

//GET
router.get("/:id/", productController.getProductDetail);

//ADD
router.post("/", productController.addProduct);

//UPDATE
router.put("/:id", productController.updateProduct);

//DELETE
router.delete("/:id", productController.deleteProduct);

module.exports = router;
