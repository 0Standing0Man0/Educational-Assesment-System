document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const studentNameInput = document.getElementById('studentName');
    const studentEmailInput = document.getElementById('studentEmail');
    const studentPictureInput = document.getElementById('studentPicture');
    const studentPhonenoInput = document.getElementById('studentPhoneno');
    const studentDobInput = document.getElementById('studentDob');

    // Add an event listener to the phone number input for validation
    studentPhonenoInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, '').substr(0, 10); // Remove non-digits and limit to 10 digits
    });

    // Fetch student's current profile data from the server and populate the form fields

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Gather updated profile data
        const updatedProfile = {
            name: studentNameInput.value,
            email: studentEmailInput.value,
            picture: studentPictureInput.files[0], // Uploaded image file
            phoneno: studentPhonenoInput.value,
            dob: studentDobInput.value
        };

        // Create a FormData object to send the data to the server
        const formData = new FormData();
        formData.append('name', updatedProfile.name);
        formData.append('email', updatedProfile.email);
        formData.append('picture', updatedProfile.picture);
        formData.append('phoneno', updatedProfile.phoneno);
        formData.append('dob', updatedProfile.dob);

        // Send the updated profile data to the server for processing
        // You would typically use AJAX or fetch for this

        // Handle the response from the server

        // Display a success message or handle errors

        console.log('Profile updated successfully!', updatedProfile);
    });
});
