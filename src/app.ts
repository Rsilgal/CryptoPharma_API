import  express, { Router, json }  from "express";
import cors from "cors";
import "dotenv/config"
import router from "./routes";

const PORT = process.env['API_PORT'] || 3001;

const app = express()
app.use(cors())
app.use(json())
app.use(router)

app.listen(PORT, () => console.log(`Puerto ${PORT}`));