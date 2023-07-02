import { Router } from "express";
import { productsRouter } from "./products";
import { prescriptionsRouter } from "./prescription";

const router = Router();

router.use('/api/product', productsRouter);
router.use('/api/prescription', prescriptionsRouter);

export default router;