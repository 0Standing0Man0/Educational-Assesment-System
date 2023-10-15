document.addEventListener('DOMContentLoaded', function() {
    const filterTypeSelect = document.getElementById('filterType');
    const searchBox = document.getElementById('searchBox');
    const filterButton = document.getElementById('filterButton');
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
});
