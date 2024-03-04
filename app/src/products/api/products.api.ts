import { Response, Request, Router } from "express";
import { container } from "tsyringe";
import { ProductsControllers } from "../controller/products.controller";
import { ProductsRequest } from "../interfaces/product-request.interface";

const router = Router();
const controller = container.resolve(ProductsControllers)

router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await controller.getAllProducts();
        res.status(200).json(products)
    } catch (error: any) {
        res.status(400).json({ error });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newProducts = req.body as ProductsRequest
        const product = await controller.createProduct(newProducts);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.put("/", async (req: Request, res: Response) => {
    try {
        const updateProduct = req.body as ProductsRequest
        const product = await controller.updateProduct(updateProduct);
        res.status(200).json({ update: product });
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.delete("/", async (req: Request, res: Response) => {
    try {
        const id = req.query.id;
        const product = await controller.deleteProduct(Number(id));
        res.status(200).json({ delete: product });
    } catch (error) {
        res.status(400).json({ error });
    }
});

export default router;