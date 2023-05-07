import { CartManager } from "../manager/cartManager";
import { Router } from "express";
import { addProductCart } from './../manager/cartManager';
import { getProductById } from './../manager/productsManager';

const router = Router()
const cart = new CartManager("/cart.json")
cart.createFileCart()

router.post("/", async(req, res)=>{
    try{
        await cart.createCart()
        res.status(200).send({message: "carrito creado correctamente"})
    }
    catch(error){
        res.status(404).json({message:"error".message})
    }
})

router.get("/:cid", async(req, res)=>{
    try{
        const {cid} = req.params
        const cartById = await cart.getProductById(parseFloat(cid))
        if(!cartById){
            return res.status(404).json({message: "cart no found"})
        }
        return res.status(200).json(cartById)
    }catch(error){
        res.status(404).json({message: error.message})
    }
})

router.post("/:cid/product/:pid", async(req, res)=>{
    try{
        const {cid, pid} = req.params
        await cart.addProductCart(parseFloat(cid),parseFloat(pid))
        res.status(201).send({mensaje: "Producto agregado con éxito!"}); 
    } catch (error) {
        console.log(error)
        return res.status(202).send({ status: "ERROR", error: error })
    }
})
export default router