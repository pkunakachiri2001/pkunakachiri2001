document.addEventListener('DOMContentLoaded', function() {
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        // Add event listeners for hover effects
        product.addEventListener('mouseover', function() {
            product.style.transform = 'scale(1.1)';
            product.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        product.addEventListener('mouseout', function() {
            product.style.transform = 'scale(1)';
            product.style.boxShadow = 'none';
        });
    });
});
