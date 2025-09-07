const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/ordersController');
const ordersController = new OrdersController();

// Route to create a new order
router.post('/', ordersController.createOrder);

// Route to get order details by order ID
router.get('/:id', ordersController.getOrderDetails);

module.exports = router;