import { StatusCodes } from "http-status-codes";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
import { BadRequest } from "../errors/index.js";

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequest("No File Uploaded");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequest("Please Upload Image");
  }
  const maxSize = 1024 * 1024;

  if (!productImage.maxSize > maxSize) {
    throw new BadRequest("Image should be less than 1mb");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);
  res.status(StatusCodes.OK).json({
    img: {
      src: `/uploads/${productImage.name}`,
    },
  });
};

export { uploadProductImage };
