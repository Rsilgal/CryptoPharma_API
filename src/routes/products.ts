import { Router } from "express";
import { buyProduct, createProduct, getProduct, getProducts, sellProduct } from "../controllers/products.controller";

const productsRouter = Router();

// http://localhost:3001/api/product
productsRouter.get("/", getProducts);

// http://localhost:3001/api/product/1
productsRouter.get("/:id", getProduct);

// http://localhost:3001/api/product/create
productsRouter.post("/create", createProduct);

// http://localhost:3001/api/product/buy/1
productsRouter.post("/buy/:id", buyProduct);

// http://localhost:3001/api/product/sell/1
productsRouter.post("/sell/:id", sellProduct);

export { productsRouter };