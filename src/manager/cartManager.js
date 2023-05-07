import { __dirname } from "../path";
import fs from "fs";
import { CartManager } from './cartManager';
import { getProductById } from './productsManager';

const pathFile = __dirname + '/fs/productsCart.json';


export const createFileCart = async()=>{
    try{
        if(fs.existsSync(pathFile)){
            await fs.promises.writeFile(pathFile, "[]")
        }
    }
    catch(error){
        throw new Error(`el archivo ya esta creado ${error}`)
    }
}
    
export const getCarts = async()=>{
    try{
        let cartReading = await fs.promises.readFile(pathFile, "utf-8")
        let cartReagindParse = JSON.parse(cartReading)
        return cartReagindParse
    }
    catch(error){
        throw new Error(error);
    }
}    

export const createCart = async()=>{
    try{
        let cartGet = await getCarts();
        const lastProd = cartGet[cartGet.length -1]
        const newId = lastProd? lastProd.id +1 : 1;
        const cart = {
            id: newId,
            products: []
        }
        cartGet.push(cart)
        await fs.promises.writeFile(pathFile, JSON.stringify(cartGet, null, 2))
    }
    catch(error){
        console.log(error);
    }
}

export const getCartById = async(id)=>{
    try{
        let cartGet = await getCarts()
        let findCartId = cartGet.find((cart => cart.id === id))
        if(findCartId){
            return findCartId
        }else{
            throw new Error("el ID del cart recibido no existe")
        }
    }
    catch (error) {
        throw new Error(error);
    }
}
    
export const addProductCart = async(idCart, idProd)=>{
    try{
        let cartGet = await getCarts();
        //buscar el id del carrito//

        const cartByIdSearch = cartGet.find((obj => obj.id === idCart))
        //buscar el id del producto//

        const findProd = await getProductById(idProd)
        const newProductToCart = {
            quantity: 1,
            productId: findProd.id
        }
        const prodInCartFind =await cartByIdSearch.products.find((prod => prod.productId === findProd.id))
        if(prodInCartFind){
            prodInCartFind.quantity++
            return await fs.promises.writeFile(pathFile, JSON.stringify(cartGet, null, 2))
        }
    }
    catch (error) {
        console.log(error);
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