document.addEventListener('DOMContentLoaded', function() {
    const promoteButton = document.getElementById('promoteButton');
    const demoteButton = document.getElementById('demoteButton');
    const studentList = document.getElementById('studentList');

    // Example: Add student list items dynamically
    const students = [
        { name: 'Student 1', grade: 'A', promote: true },
        { name: 'Student 2', grade: 'B', promote: false },
        { name: 'Student 3', grade: 'C', promote: true },
    ];

    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>
                <input type="checkbox" name="student" data-promote="${student.promote}">
                ${student.name} (Grade: ${student.grade})
            </label>
        `;
        studentList.appendChild(listItem);
    });

    promoteButton.addEventListener('click', function() {
        promoteStudents();
    });

    demoteButton.addEventListener('click', function() {
        demoteStudents();
    });

    function promoteStudents() {
        const selectedStudents = getSelectedStudents(true);
        // Implement your promotion logic here for selected students
        alert(`Promoted Students: ${selectedStudents.join(', ')}`);
    }

    function demoteStudents() {
        const selectedStudents = getSelectedStudents(false);
        // Implement your demotion logic here for selected students
        alert(`Demoted Students: ${selectedStudents.join(', ')}`);
    }

    function getSelectedStudents(promote) {
        const selectedStudents = [];
        const checkboxes = document.querySelectorAll('input[name=student]:checked');
        checkboxes.forEach(checkbox => {
            const isPromote = checkbox.getAttribute('data-promote') === 'true';
            if (isPromote === promote) {
                selectedStudents.push(checkbox.nextSibling.textContent.trim());
            }
        });
        return selectedStudents;
    }
});
