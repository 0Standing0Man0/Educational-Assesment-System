document.addEventListener('DOMContentLoaded', function() {
    const assessmentForm = document.getElementById('assessmentForm');
    const questionTypeSelect = document.getElementById('questionType');

    assessmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const questionInput = document.getElementById('question');
        const questionType = questionTypeSelect.value;
        const answerInput = document.getElementById('answer');

        const question = questionInput.value;
        const answer = answerInput.value;

        // You can process and store the question, question type, and answer data here
        // This is where you'd typically send the data to a backend server

        // Clear the form after submission
        questionInput.value = '';
        questionTypeSelect.value = 'multiple-choice'; // Reset to default value
        answerInput.value = '';

        // Display a success message or handle errors
        alert('Question uploaded successfully!');
    });
});
