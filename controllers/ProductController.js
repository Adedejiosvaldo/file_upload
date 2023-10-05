import { StatusCodes } from "http-status-codes";
import Product from "../model/Product.js";

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({ product });
};

const getAllProducts = async (req, res) => {
  res.send("List of products");
};

export { createProduct, getAllProducts };
