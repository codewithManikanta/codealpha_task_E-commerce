const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productsController');

const productsController = new ProductsController();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

module.exports = router;