document.addEventListener('DOMContentLoaded', function() {
    const bgColorInput = document.getElementById('bgColor');
    const themeSelect = document.getElementById('theme');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const saveSettingsButton = document.getElementById('saveSettings');

    // Load user's current settings and apply them to the form

    saveSettingsButton.addEventListener('click', function() {
        const bgColor = bgColorInput.value;
        const selectedTheme = themeSelect.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        // Save the user's settings to the server
        // You would typically use AJAX or fetch for this

        // Handle the response from the server

        // Apply background color and theme changes to the page
        document.body.style.backgroundColor = bgColor;
        // Apply theme-specific styling if needed

        // Display a success message or handle errors

        console.log('Settings saved successfully!');
    });
});
