import productsModel from "../models/products.model.js";
import MongoseSingleton from "./mongo.singleton.js";

MongoseSingleton.getInstance();

class ProductService {
    constructor() {
    }

    async addProduct(product){
        const process = await productsModel.create(product);
        return process === null ? 'No se pudo crear el producto' : 'Producto creado';
    }

    
    async getProducts() {
        return await productsModel.find().lean();
    }

    // async getProduct(id) {
    //     const product = await productModel.findById(id);
    //     return product === null ? 'No se encuentra el producto' : product;
    // }

    // async updateProduct(id, newContent) {
    //     return await productModel.findByIdAndUpdate(id, newContent);
    // }

    // async deleteProduct(id) {
    //     return await productModel.findByIdAndDelete(id);
    // }
}



export default ProductService;