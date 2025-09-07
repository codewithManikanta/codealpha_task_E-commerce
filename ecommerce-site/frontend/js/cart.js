// This file contains JavaScript functions for managing the shopping cart, including adding and removing items.

let cart = [];

// Function to add item to cart
function addToCart(productId, productName, productPrice) {
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(item.id);
        itemElement.appendChild(removeButton);
        cartContainer.appendChild(itemElement);
    });
    updateCartTotal();
}

// Function to update total price in cart
function updateCartTotal() {
    const totalContainer = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalContainer.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `<tr><td colspan="5">Your cart is empty.</td></tr>`;
        cartTotal.textContent = '0.00';
        return;
    }

    cart.forEach((item, idx) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        cartItems.innerHTML += `
            <tr>
                <td>
                    <img src="${item.image}" alt="${item.name}" style="width:70px;vertical-align:middle;">
                    <div>
                        <strong>${item.name}</strong><br>
                        <span style="font-size:0.9em;">${item.description}</span><br>
                        <span style="font-size:0.9em;">Category: ${item.category || ''}</span>
                    </div>
                </td>
                <td>₹${item.price.toLocaleString('en-IN')}</td>
                <td>
                    <input type="number" min="1" value="${item.qty}" data-idx="${idx}" class="qty-input" style="width:50px;">
                </td>
                <td>₹${subtotal.toLocaleString('en-IN')}</td>
                <td><button class="remove-btn" data-idx="${idx}">Remove</button></td>
            </tr>
        `;
    });
    cartTotal.textContent = total.toLocaleString('en-IN');

    // Quantity change handler
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', function() {
            let val = parseInt(this.value);
            if (val < 1) val = 1;
            cart[this.dataset.idx].qty = val;
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        });
    });

    // Remove handler
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            cart.splice(this.dataset.idx, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        });
    });
}

window.onload = loadCart;

document.getElementById('place-order-btn').onclick = function() {
    if (total === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Order placed! Thank you for shopping.');
    localStorage.removeItem('cart');
    loadCart();
};