document.addEventListener('DOMContentLoaded', function() {
    const notificationList = document.getElementById('notificationList');
    const messageForm = document.getElementById('messageForm');
    const recipientSelect = document.getElementById('recipient');
    const messageTextarea = document.getElementById('message');

    // Function to add a new notification to the list
    function addNotification(recipient, message) {
        const listItem = document.createElement('li');
        listItem.textContent = `${recipient}: ${message}`;
        notificationList.appendChild(listItem);
    }

    // Simulate loading existing notifications
    addNotification('Student', 'Your exam results are available.');
    addNotification('Parent', 'Parent-teacher conference scheduled for next week.');

    // Handle sending a new message
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const recipient = recipientSelect.value;
        const message = messageTextarea.value;

        // Send the message to the server for processing and storage
        // You would typically use AJAX or fetch for this

        // Clear the message input field
        messageTextarea.value = '';

        // Add the message to the notification list
        addNotification(recipient, message);
    });
});
