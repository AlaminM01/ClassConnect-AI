// Function to show content based on selected course
function showCourseContent(courseId) {
    const content = {
        course1: 'Content for Course 1',
        course2: 'Content for Course 2',
        course3: 'Content for Course 3',
        course4: 'Content for Course 4'
    };

    document.getElementById('course-content').innerHTML = content[courseId] || 'Select a course to see details.';
}

// Function to toggle visibility of course content or similar
function toggleCourses() {
    const courseList = document.getElementById('course-list');
    courseList.style.display = courseList.style.display === 'none' ? 'block' : 'none';
}
