// Mock data for uploaded assignments
const assignments = [
    "Assignment 1 - Introduction to HTML",
    "Assignment 2 - CSS Styling",
    "Assignment 3 - JavaScript Basics"
];

// Function to load assignments into the list
function loadAssignments() {
    const assignmentList = document.getElementById('uploaded-assignments');
    assignments.forEach(assignment => {
        const li = document.createElement('li');
        li.textContent = assignment;
        assignmentList.appendChild(li);
    });
}

// Function to simulate uploading an assignment
function uploadAssignment() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const assignmentList = document.getElementById('uploaded-assignments');
        const li = document.createElement('li');
        li.textContent = file.name;
        assignmentList.appendChild(li);
        fileInput.value = ''; // Reset file input
        alert('Assignment uploaded successfully!');
    } else {
        alert('Please select a file to upload.');
    }
}

// Load assignments when the page loads
document.addEventListener('DOMContentLoaded', loadAssignments);
