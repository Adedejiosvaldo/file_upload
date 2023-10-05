import { StatusCodes } from "http-status-codes";
import path from "path";
// import { __dirname } from "../app.js";

// import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  console.log(imagePath);
  await productImage.mv(imagePath);
  res.status(StatusCodes.OK).json({
    img: {
      src: `/uploads/${productImage.name}`,
    },
  });
};

export { uploadProductImage };
