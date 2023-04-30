import fs from "fs";
import { json } from "express";

export default class ProductManager{
    constructor(path){
        this.path = path;
    }

    async #getmaxId(){
        let maxId = 0;
        const users = await this.getallProducts();
        products.map((prod)=>{
            if(prod.id>maxId) maxId = prod.id;
        });
        return maxId
    }

    async getAllProducts(){
        try{
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, "utf-8");
                const productsJSON = json.parse(products);
                return productsJSON;
            }else{
                return [];
            }
        }catch(error){
            console.log("error")
        }
    }

    async getProductById(id){
        try{
            const products = await this.getAllProducts();
            const product = p5r
        }catch(error){
            console.log("error")
        }
    }

    async createProduct(objeto){
        try{
            const product = {
                id: await this.#getmaxId() +1,
                ...objeto
            }
            const productsFile = await this.getAllProducts();
            productsFile.push(product)
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
            return (product)
        }catch(error){
            console.log("error")
        }       
    }

    async updateProduct(objeto, id){
        try{
            const productsFile = await this.getAllProducts();
            productsFile.findIndex(prod => prod.id === id);
            console.log("index:::", index);
            if(index === -1){
                throw new Error(`ID ${id} not found`)
            }else{
                productsFile[index] = {...objeto, id}
            }
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile))
        }catch(error){
            console.log("error")
        }
    }

    async deleteProductById(id){
        try{
            const productsFile = await this.getAllProducts();
            if(productsFile.length > 0){
                const newArray = productsFile.splice(prod => prod.id !== id)
                await fs.promises.writeFile(this.path, JSON.stringify(newArray));
            }else{
                throw new Error(`product ID: ${id} not found`);
                }
            
            }
        catch(error){
            console.log("error")
        }
    }

    async deleteAllProducts(){
        try{
            if(fs.existsSync(this.path)){
                await fs.promises.unlink(this.path)
            }
        }catch(error){
            console.log("error")
        }
    }
}
