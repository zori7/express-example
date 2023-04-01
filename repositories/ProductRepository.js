const storage = require('../storage');

class ProductRepository {
    static nextId = storage.products.length + 1;

    getAll() {
        return storage.products;
    }

    getById(id) {
        return storage.products.find(product => product.id === id);
    }

    create(product) {
        const toAdd = {
            ...product,
            id: ProductRepository.nextId++
        };

        storage.products.push(toAdd);
        return toAdd;
    }
}

module.exports = ProductRepository;
