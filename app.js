import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import errorMiddlewareHandler from "./middlewares/ErrorMiddleware.js";
import NotFound from "./middlewares/not-found.js";
import connect from "./db/connect.js";
import router from "./routers/ProductRoutes.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(NotFound);
app.use(errorMiddlewareHandler);

app.get("/", (req, res) => {
  res.send("<h1>FIle Upload API</h1>");
});
app.use("/api/v1/products", router);

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log("Up and running", port);
  });
};
start();
