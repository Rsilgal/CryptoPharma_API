import express, { json } from "express";
import cors from "cors";
import "dotenv/config"
import router from "./routes";
import { controllerContract, prescriptionContract, productContract } from "./config/web3";

const PORT = process.env['API_PORT'] || 3001;

const app = express()
app.use(cors())
app.use(json())
app.use(router)

controllerContract.events.productCreated().on('data', (event) => { console.log(`Se ha creado un producto, que tiene como número de bloque el ${event.blockNumber}`); });
controllerContract.events.prescriptionCreated().on('data', (event) => { console.log(`La prescripción ha sido creada y asignada al bloque con número ${event.blockNumber}`); });
controllerContract.events.purchasedProduct().on('data', (event) => { console.log(`La compra de un producto se ha registrado y validado en el bloque ${event.blockNumber}`); });
controllerContract.events.soldProduct().on('data', (event) => { console.log(`Un producto se ha vendido exitosamente, la venta queda reflejada en el bloque ${event.blockNumber}`); });

prescriptionContract.events.prescriptionMinted().on('data', (event) => { console.log(`Se ha creado una prescripción con ${event.data}`);})
productContract.events.productMinted().on('data', (event) => { console.log(`Se ha creado un producto con ${event.data}`);})

app.listen(PORT, () => console.log(`Puerto ${PORT}`));