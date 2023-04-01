class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    getAllProducts() {
        return this.productRepository.getAll();
    }

    getProductById(id) {
        return this.productRepository.getById(+id);
    }

    createProduct(product) {
        return this.productRepository.create(product);
    }
}

module.exports = ProductService;
