class OrdersController {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }

    async createOrder(req, res) {
        try {
            const { productId, quantity, userDetails } = req.body;
            const newOrder = await this.orderModel.create({ productId, quantity, userDetails });
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    }

    async getOrderDetails(req, res) {
        try {
            const { id } = req.params;
            const order = await this.orderModel.findById(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching order details', error });
        }
    }
}

module.exports = OrdersController;