import { autoInjectable } from "tsyringe";
import { ProductRepository } from "../repository/products.repository";
import { ProductsRequest } from "../interfaces/product-request.interface";

@autoInjectable()
export class ProductsControllers {
    constructor(private productRepository: ProductRepository) {

    }

    getAllProducts() {
        try {
            return this.productRepository.getAllProducts();
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    createProduct(req: ProductsRequest) {
        try {
            return this.productRepository.createProduct(req);
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    updateProduct(req: ProductsRequest) {
        try {
            return this.productRepository.updateProduct(req);
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    deleteProduct(id: number) {
        try {
            return this.productRepository.deleteProduct(id);
        } catch (error: any) {
            throw Error(error.message)
        }
    }
}