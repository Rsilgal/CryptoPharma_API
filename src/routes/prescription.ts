import { Router } from "express";
import { getPrescriptions, createPrescription, getPrescription } from "../controllers/prescription.controller";

const prescriptionsRouter = Router();

// http://localhost:3001/api/prescription
prescriptionsRouter.get("/", getPrescriptions);

// http://localhost:3001/api/prescription/1
prescriptionsRouter.get("/:id", getPrescription);

// http://localhost:3001/api/prescription/create
prescriptionsRouter.post("/create", createPrescription);


export { prescriptionsRouter };