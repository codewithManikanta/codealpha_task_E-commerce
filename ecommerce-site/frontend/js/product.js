// This file contains JavaScript functions specific to product-related actions, such as fetching product details.

const apiUrl = 'http://localhost:3000/api/products';

// Example product data (should match your main.js)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 49.99,
        description: "High-quality wireless headphones with noise cancellation.",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 89.99,
        description: "Track your fitness and notifications with this smart watch.",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 29.99,
        description: "Portable speaker with deep bass and long battery life.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    }
];

// Function to fetch all products
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
        productContainer.appendChild(productElement);
    });
}

// Function to fetch product details by ID
async function fetchProductById(productId) {
    try {
        const response = await fetch(`${apiUrl}/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

// Function to display product details on the product page
function displayProductDetails(product) {
    const productDetailContainer = document.getElementById('product-detail');
    productDetailContainer.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}

// Function to add a product to the shopping cart
function addToCart(productId) {
    // Logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
}

// Get product ID from URL (e.g., product.html?id=1)
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    // Optionally add image if you want
    // document.querySelector('.product-info').insertAdjacentHTML('afterbegin', `<img src="${product.image}" alt="${product.name}" style="width:300px;">`);
}

document.getElementById('add-to-cart').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
});

// Check if on product page and fetch product details
if (window.location.pathname === '/product.html') {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        fetchProductById(productId);
    }
}

// Fetch products on the index page
if (window.location.pathname === '/index.html') {
    fetchProducts();
}