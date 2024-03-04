import { autoInjectable } from "tsyringe";
import { Product } from "../model/products.model";
import { ProductsRequest } from "../interfaces/product-request.interface";

@autoInjectable()
export class ProductRepository {

    async getAllProducts() {
        try {
            const products = Product.find();
            return products;
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    async createProduct(req: ProductsRequest) {
        try {
            const newProducts = Product.create({ ...req });
            return newProducts.save();
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    async updateProduct(req: ProductsRequest) {
        try {
            const { id, ...updateProduct } = req;
            const { affected } = await Product.update({ id }, { ...updateProduct });
            if (!affected) {
                throw Error('No se pudo actualizar el producto.')
            }
            return affected > 0;
        } catch (error: any) {
            throw Error(error.message)
        }
    }

    async deleteProduct(id: number) {
        try {
            const { affected } = await Product.delete(id);
            if (!affected) {
                throw Error('No se pudo borrar el producto.')
            }
            return affected > 0;
        } catch (error: any) {
            throw Error(error.message)
        }
    }

}