class ProductsController {
    constructor(productModel) {
        this.productModel = productModel;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.productModel.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await this.productModel.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    }
}

export default ProductsController;