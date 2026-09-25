// settings.js
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const profileImage = document.getElementById('profile-image');

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Handle password reset logic here
        alert('Password reset successful!');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Handle contact admin logic here
        alert('Message sent to admin!');
    });
});
