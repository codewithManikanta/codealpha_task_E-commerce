class Order {
    constructor(id, productId, quantity, userDetails) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.userDetails = userDetails;
    }
}

module.exports = Order;