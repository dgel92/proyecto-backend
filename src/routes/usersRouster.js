import {Router} from "express";

const router = Router();


router.get("/", (req, res)=>{
    res.send("ruta1")

})


router.get("/", (req, res)=>{
    res.send("ruta2")
})

export default router