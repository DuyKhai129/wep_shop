const categoryController = require("../Controller/categoryController");

const router = require("express").Router();

//GET all
router.get("/", categoryController.getAllCategory);

//GET
router.get("/detail/:id", categoryController.getProductByIdCategory);

//ADD
router.post("/", categoryController.addCategory);

//UPDATE
router.put("/:id", categoryController.updateCategory);

//DELETE
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
