import { Router } from "express";
import { buyPorduct, createProduct, getProduct, getProducts, sellProduct } from "../controllers/products";

const productsRouter = Router();

// http://localhost:3001/api/product
productsRouter.get("/", getProducts);

// http://localhost:3001/api/product/1
productsRouter.get("/:id", getProduct);

// http://localhost:3001/api/product/create
productsRouter.post("/create", createProduct);

// http://localhost:3001/api/product/buy/1
productsRouter.post("/buy/:id", buyPorduct);

// http://localhost:3001/api/product/sell/1
productsRouter.post("/sell/:id", sellProduct);

export { productsRouter };