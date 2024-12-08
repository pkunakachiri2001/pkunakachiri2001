document.addEventListener('DOMContentLoaded', function() {
    // Create a button for toggling dark mode
    var darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '10px';
    darkModeButton.style.right = '10px';
    darkModeButton.style.padding = '10px';
    darkModeButton.style.zIndex = '1000';
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
