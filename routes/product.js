const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const auth = require("../middleware/auth");

router.get("/products",auth ,getAllProduct);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", updateProduct);
module.exports = router;
