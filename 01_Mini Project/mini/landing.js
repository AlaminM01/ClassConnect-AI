// Function to display course content
function showCourseContent(courseId) {
    const courseContent = {
        course1: `
            <h2>Course 1: Introduction to Programming</h2>
            <div class="assignment-card">
                <h3>Assignment 1: Basics of Python</h3>
                <p>Due Date: August 20, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 2: Data Structures</h3>
                <p>Due Date: August 27, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 3: Object-Oriented Programming</h3>
                <p>Due Date: September 5, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 4: Functional Programming</h3>
                <p>Due Date: September 12, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
        `,
        course2: `
            <h2>Course 2: Advanced JavaScript</h2>
            <div class="assignment-card">
                <h3>Assignment 1: ES6 Features</h3>
                <p>Due Date: September 5, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 2: Asynchronous JavaScript</h3>
                <p>Due Date: September 12, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 3: JavaScript Design Patterns</h3>
                <p>Due Date: September 19, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
        `,
        course3: `
            <h2>Course 3: Web Development</h2>
            <div class="assignment-card">
                <h3>Assignment 1: HTML & CSS</h3>
                <p>Due Date: September 10, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 2: JavaScript Basics</h3>
                <p>Due Date: September 17, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 3: Responsive Design</h3>
                <p>Due Date: September 24, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
        `,
        course4: `
            <h2>Course 4: Database Management</h2>
            <div class="assignment-card">
                <h3>Assignment 1: SQL Queries</h3>
                <p>Due Date: September 15, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 2: Database Normalization</h3>
                <p>Due Date: September 22, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
            <div class="assignment-card">
                <h3>Assignment 3: Indexing and Performance</h3>
                <p>Due Date: September 29, 2024</p>
                <button class="view-assignment-btn" onclick="viewAssignment()">View Assignment</button>
            </div>
        `
    };

    const contentElement = document.getElementById('course-content');
    contentElement.innerHTML = courseContent[courseId] || '<p>Select a course to view details.</p>';
}

// Function to toggle the display of the courses list
function toggleCourses() {
    const courseList = document.getElementById('course-list');
    courseList.style.display = (courseList.style.display === 'none' || courseList.style.display === '') ? 'block' : 'none';
}

// Event listener for the logout button
document.getElementById('logout-btn').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
});

// Event listener for the sign out link
document.getElementById('sign-out').addEventListener('click', function() {
    // Add logout logic here (e.g., clear session, redirect to login page)
    alert('You have been logged out.');
    // Example: window.location.href = 'login.html';
});

// Function to handle the assignment view button click
function viewAssignment() {
    window.location.href = 'assignments.html';
}
// Event listener for the profile button
document.getElementById('profile-btn').addEventListener('click', function() {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.toggle('show');
});

// Event listener for the document to close the menu if clicked outside
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profile-menu');
    const profileBtn = document.getElementById('profile-btn');
    if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.remove('show');
    }
});
