import { __dirname } from "../path";
import fs from "fs";

const pathFile = __dirname + '/fs/productsCart.json';


export const createFileCart = async()=>{
    try{
        if(fs.existsSync(this.path)){
            const cartFile = await fs.promises.writeFile((pathFile,"[]"), JSON.stringify(cartFile)) 
        }
        }
        catch{

    }

}

/*export const createCart = async(obj) =>{
    try{
        const cart = {
            id: await getMaxId() +1,
            products: []
    };
    const cartsFile = await getallCarts();
        cartsFile.push(product);
        await fs.promises.writeFile(pathFile, JSON.stringify(cartsFile));
        return cart
    }
    catch(error){
        console.log(error);
    }
}

export const saveProductCart = async(idCart, idProd) =>{
    const productExistant = cart.products.find(prod => prod.id === idProd)
    if{
        productExistant.quantity +1
    }
}}*/