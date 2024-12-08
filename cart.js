// Function to add items to the cart
    function addToCart(productName, productPrice, productImage) {
        // Get existing cart data from localStorage or initialize an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new product to the cart
        cart.push({ name: productName, price: productPrice, image: productImage });

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Notify the user
        alert(productName + " has been added to the cart!");
    }