document.addEventListener('DOMContentLoaded', function() {
    // Common script code here
    
    // Example for saving settings
    document.getElementById('saveBackground').addEventListener('click', function() {
        const bgColor = document.getElementById('bgColor').value;
        // Save and apply background color
    });

    document.getElementById('saveTheme').addEventListener('click', function() {
        const selectedTheme = document.getElementById('theme').value;
        // Save and apply the selected theme
    });

    document.getElementById('saveFontSize').addEventListener('click', function() {
        const fontSize = document.getElementById('fontSize').value;
        // Save and apply the font size
    });

    document.getElementById('saveLanguage').addEventListener('click', function() {
        const selectedLanguage = document.getElementById('language').value;
        // Save and apply the selected language
    });
});
