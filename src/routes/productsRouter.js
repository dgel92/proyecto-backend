import ProductManager from "../manager/productsManager.js";
import { Router } from "express";

const productManager = new ProductManager("./products.json");
const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await productManager.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" });
    }
    });

    router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManager.getProductById(Number(id));
        if (product) {
        res.status(200).json(product);
        } else {
        res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto" });
    }
    });

    router.post("/", async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productManager.createProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto" });
    }
    });

    router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const productFile = await productManager.getProductById(Number(id));
        if (productFile) {
        await productManager.updateProduct(product, Number(id));
        res.send("Producto actualizado con éxito");
        } else {
        res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
    });

    router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManager.getProductById(Number(id));
        if (product) {
        await productManager.deleteProductById(Number(id));
        res.send(`Producto con id ${id} eliminado`);
        } else {
        res.status(404).send(`Producto con id ${id} no encontrado`);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
    });

    router.delete("/", async (req, res) => {
    try {
        await productManager.deleteAllProducts();
        res.send("Todos los productos han sido eliminados");
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar los productos" });
    }
    });

export default router;