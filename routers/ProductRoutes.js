import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/ProductController.js";
import { uploadProductImage } from "../controllers/UploadController.js";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route('/uploads').post(uploadProductImage)
export default router;
