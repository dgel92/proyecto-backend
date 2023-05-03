import ProductManager from "../manager/productsManager.js";
import {Router} from "express";

const productManager = new ProductManager("./products.json");
const router = Router();

router.get()

router.get("/", async (req, res)=>{
    try{
        const products = await productManager.getAllProducts();
        res.status(200).json(products);
        
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
})


router.get("/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await productManager.getProductById(Number(id));
        if(product){
            res.status(200).json(product)
        }else{
            res.status(400).send("producto no encontrado");
        }
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
});


router.post("/", async (req, res)=>{
    try{
        const product = req.body;
        const newProduct = await productManager.createProduct(product);
        res.json(newProduct);
            }catch(error){
        res.status(400).json({message:error.message}) 
    }
})

router.put("/:id", async(req, res)=>{
    try{
        /*const {name, price, stock} = req.body;
        const product = {
            name,
            price,
            stock
        }*/
        const product = req.body;
        const {body} = req.params;
        const productFile = await productManager.getProductById(Number(id));
        if(productFile){
            await productManager.updateProduct(product, Number(id));
            res.send("producto actualizado con exito")
        }else{
            res.status(404).send("producto no encontrado");
        }
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
})


router.delete("/:id", async(req, res)=>{
    try{
        const {id} = req.params
        const products = await productManager.getAllProducts();
        if(products.length > 0){
            await productManager.deleteProductById(Number(id));
            res.send(`producto con id ${id} eliminado`)
        }else{
            res.send(`producto id ${id} no encontrado`)
        }
    }catch(error){
        res.status(400).json({message:error.message}) 
    }

})

router.delete("/:id", async(req, res)=>{
    try{
        await productManager.deleteAllProducts();
        res.send("todos los productos eliminados")
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
})

router.get("/", async(req, res)=>{
    try{
        const {id} = req.query;
        const product = await productManager.getProductById(Number(id))
        if(product){
            res.status(200).json({message:"producto no encontrado", product})
        }else{
            res.status(400).send("producto no encontrado")
        }}
    catch(error){
        res.status(404).json({message: error.message})
    }

    });

export default router;