const express = require("express");
const upload=require('../config/multer')
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}=require('../controllers/productController');

const router = express.Router()


router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/",authMiddleware,adminMiddleware,upload.single('image'),addProduct);
router.put("/:id",authMiddleware,adminMiddleware,updateProduct);
router.delete("/:id", authMiddleware,adminMiddleware,deleteProduct);

module.exports = router;