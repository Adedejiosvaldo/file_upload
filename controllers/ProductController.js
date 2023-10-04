import { StatusCodes } from "http-status-codes";
import Product from "../model/Product.js";

const createProduct = async (req, res) => {
  res.send("Create");
};

const getAllProducts = async (req, res) => {
  res.send("List of products");
};

export { createProduct, getAllProducts };
