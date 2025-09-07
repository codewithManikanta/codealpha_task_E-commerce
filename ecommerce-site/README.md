# E-commerce Site

This project is a basic e-commerce application built with a Node.js backend using Express.js and a frontend using HTML, CSS, and JavaScript. The application features product listings, a shopping cart, product details pages, and order processing.

## Project Structure

```
ecommerce-site
├── backend
│   ├── app.js                # Entry point for the backend application
│   ├── routes                # Contains route definitions
│   │   ├── products.js       # Routes for product operations
│   │   └── orders.js         # Routes for order operations
│   ├── controllers           # Contains business logic for handling requests
│   │   ├── productsController.js # Logic for product-related operations
│   │   └── ordersController.js   # Logic for order-related operations
│   ├── models                # Database models
│   │   ├── product.js        # Product model
│   │   └── order.js          # Order model
│   └── package.json          # NPM configuration file
├── frontend
│   ├── index.html            # Main HTML file for product listings
│   ├── product.html          # HTML file for product details
│   ├── cart.html             # HTML file for shopping cart
│   ├── css                   # Contains CSS files
│   │   └── styles.css        # Styles for the frontend
│   └── js                    # Contains JavaScript files
│       ├── main.js           # Main JavaScript logic
│       ├── product.js        # Product-related JavaScript functions
│       └── cart.js           # Shopping cart management functions
└── README.md                 # Documentation for the project
```

## Features

- **Product Listings**: View all available products with details.
- **Product Details Page**: View detailed information about a specific product.
- **Shopping Cart**: Add products to the cart, view cart contents, and remove items.
- **Order Processing**: Create and manage orders.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Start the backend server:
   ```
   node app.js
   ```

4. Open the frontend directory and open `index.html` in a web browser to view the application.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.