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
router.get("/products/:id",auth, getProduct);
router.post("/products",auth, createProduct);
router.delete("/products/:id",auth, deleteProduct);
router.patch("/products/:id",auth, updateProduct);
module.exports = router;
