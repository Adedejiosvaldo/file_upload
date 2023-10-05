import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import errorMiddlewareHandler from "./middlewares/ErrorMiddleware.js";
import NotFound from "./middlewares/not-found.js";
import connect from "./db/connect.js";
import router from "./routers/ProductRoutes.js";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
const cloudinaryV2 = cloudinary.v2;
cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(express.static("./public"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>FIle Upload API</h1>");
});
app.use("/api/v1/products", router);

app.use(NotFound);
app.use(errorMiddlewareHandler);

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log("Up and running", port);
  });
};
start();
