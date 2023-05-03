import {dirname} from "path";
import express from "express";
import { fileURLToPath } from "url";
import productsRouter from "./routes/productsRouter.js";
import userRouters from "./routes/usersRouster.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true }));
app.use("/products", productsRouter);
app.use("/users", userRouters);
app.use(express.static(__dirname + '/public'));
__dirname

const PORT = 8090; 
app.listen(PORT, ()=>{
    console.log(`🚀🚀server escuchando en puerto ${PORT}`)
})

