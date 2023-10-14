document.addEventListener('DOMContentLoaded', function() {
    const documentForm = document.getElementById('documentForm');
    const documentTypeInput = document.getElementById('documentType');
    const documentFileInput = document.getElementById('documentFile');

    documentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedDocumentType = documentTypeInput.value;
        const selectedDocumentFile = documentFileInput.files[0];

        // Create a FormData object to send the data to the server
        const formData = new FormData();
        formData.append('documentType', selectedDocumentType);
        formData.append('documentFile', selectedDocumentFile);

        // Send the document data to the server for processing
        // You would typically use AJAX or fetch for this

        // Handle the response from the server

        // Display a success message or handle errors

        console.log(`Uploaded ${selectedDocumentType} successfully!`, selectedDocumentFile);
    });
});
