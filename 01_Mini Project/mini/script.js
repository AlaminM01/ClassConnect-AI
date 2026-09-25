document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const parentItem = this.parentNode;
            const answer = parentItem.querySelector('.faq-answer');

            // Toggle active class
            parentItem.classList.toggle('active');

            // Close other open answers
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        });
    });
});
