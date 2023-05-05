export const productValidator = (req, res, next) =>{
    const product = req.body;
    if(product.price === typeof Number){
        next()
    }else{
        res.status(404).send("el valor del producto no es un numero")
    }
}


export const stockValidator = (req, res, next) =>{
    const product = req.body;
    if(product.stock >= 1){
        next()
    }else{
        res.status(404).send("el valor del producto no es un numero")
    }
}