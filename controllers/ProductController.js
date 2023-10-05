import { StatusCodes } from "http-status-codes";
import Product from "../model/Product.js";

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    res.send("Out of Stock");
  }
  res.status(StatusCodes.OK).json({ products, nP: products.length });
};

export { createProduct, getAllProducts };
