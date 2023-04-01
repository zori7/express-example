const express = require('express');
const bodyParser = require('body-parser');

const UserRepository = require('./repositories/UserRepository');
const ProductRepository = require('./repositories/ProductRepository');
const UserService = require('./services/UserService');
const ProductService = require('./services/ProductService');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

app.get('/users', (req, res) => {
    const users = userService.getAllUsers();
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/users', (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).send(user);
});

app.get('/products', (req, res) => {
    const products = productService.getAllProducts();
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const product = productService.getProductById(req.params.id);

    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.post('/products', (req, res) => {
    const product = productService.createProduct(req.body);
    res.status(201).send(product);
});

const server = app.listen(3000, () => {
    console.log('Listening port: 3000');
});

module.exports = {
    app,
    server
};
