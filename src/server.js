import express from "express";

const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`server escuchando en puerto ${PORT}`)
})

