// Function to load cart items
function loadCart() {
    // Get cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is currently empty!</p>';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        // Create a cart item element
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p class="price">₹${item.price.toFixed(2)}</p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);

        // Update the total price
        total += item.price;
    });

    // Display the total price
    const totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.textContent = `Total: ₹${total.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Get cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the selected item
    cart.splice(index, 1);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reload the cart
    loadCart();

    alert("Item removed from the cart!");
}

// Load cart on page load
window.onload = loadCart;
