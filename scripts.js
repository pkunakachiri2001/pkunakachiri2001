document.addEventListener('DOMContentLoaded', function() {
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        product.addEventListener('click', function() {
            var description = product.querySelector('p').innerText;
            var price = parseFloat(description.match(/\d+(\.\d{1,4})?/)[0]);
            var priceForTwo = (price * 2).toFixed(2);
            var popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '20%';
            popup.style.left = '30%';
            popup.style.transform = 'translate(-30%, -30%)';
            popup.style.background = 'black';
            popup.style.color = 'white';
            popup.style.padding = '20px';
            popup.style.borderRadius = '100%';
            popup.style.textAlign = 'center';
            popup.style.zIndex = '1000';
            popup.innerHTML = `
                <h2 style="color: purple;">Product Information</h2>
                <p style="color: yellow;background-color:black">${description}</p>
                <p style="color: orange;background-color:black">Price for One: ${price}rps</p>
                <p style="color: red;background-color:black">Price for Two: ${priceForTwo}rps</p>
                <p style="color: white;background-color:black">DaSponge: This product is original!</p>
                <button onclick="document.body.removeChild(this.parentNode)" style="padding: 10px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
            `;
            document.body.appendChild(popup);
        });
    });
});
