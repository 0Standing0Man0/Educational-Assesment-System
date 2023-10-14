document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const studentNameInput = document.getElementById('studentName');
    const studentEmailInput = document.getElementById('studentEmail');
    const studentGradeInput = document.getElementById('studentGrade');
    const studentPictureInput = document.getElementById('studentPicture');

    // Fetch student's current profile data from the server and populate the form fields

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Gather updated profile data
        const updatedProfile = {
            name: studentNameInput.value,
            email: studentEmailInput.value,
            grade: studentGradeInput.value,
            picture: studentPictureInput.files[0], // Uploaded image file
        };

        // Create a FormData object to send the data to the server
        const formData = new FormData();
        formData.append('name', updatedProfile.name);
        formData.append('email', updatedProfile.email);
        formData.append('grade', updatedProfile.grade);
        formData.append('picture', updatedProfile.picture);

        // Send the updated profile data to the server for processing
        // You would typically use AJAX or fetch for this

        // Handle the response from the server

        // Display a success message or handle errors

        console.log('Profile updated successfully!', updatedProfile);
    });
});
