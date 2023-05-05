import { __dirname } from "./path.js";
import express from "express";
import morgan from "morgan";
import productsRouter from "./routes/productsRouter.js";
import userRouters from "./routes/usersRouster.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true }));
app.use(morgan('dev'));

app.use("/products", productsRouter);
app.use("/users", userRouters);
app.use(express.static(__dirname + '/public'));


const PORT = 8090; 
app.listen(PORT, ()=>{
    console.log(`🚀🚀server escuchando en puerto ${PORT}`)
})

