document.addEventListener('DOMContentLoaded', function() {
    const filterTypeSelect = document.getElementById('filterType');
    const searchBox = document.getElementById('searchBox');
    const filterButton = document.getElementById('filterButton');
    const downloadLinks = document.querySelectorAll('.download-link');
    const previewLinks = document.querySelectorAll('.preview-link');
    const documentItems = document.querySelectorAll('.document-list li');

    // Event listener for filtering and searching
    filterButton.addEventListener('click', function() {
        const selectedType = filterTypeSelect.value;
        const searchText = searchBox.value.toLowerCase();

        documentItems.forEach(function(item) {
            const itemType = item.getAttribute('data-type').toLowerCase();
            const itemName = item.textContent.toLowerCase();
            
            const typeMatch = selectedType === 'all' || itemType === selectedType;
            const nameMatch = itemName.includes(searchText);

            if (typeMatch && nameMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Event listener for downloading documents
    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const documentLink = event.target.getAttribute('href');
            if (documentLink) {
                // Trigger download by clicking on the hidden link
                const hiddenLink = document.createElement('a');
                hiddenLink.href = documentLink;
                hiddenLink.download = '';
                hiddenLink.style.display = 'none';
                document.body.appendChild(hiddenLink);
                hiddenLink.click();
                document.body.removeChild(hiddenLink);
            }
        });
    });

    // Event listener for previewing documents
    previewLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const documentLink = event.target.getAttribute('href');
            if (documentLink) {
                window.open(documentLink, '_blank');
            }
        });
    });
});
