// Simple script for future interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update last updated date
    const footer = document.querySelector('.footer');
    if (footer) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long' };
        const dateString = date.toLocaleDateString('en-US', options);
        footer.innerHTML = `<p>Last updated: ${dateString}</p>`;
    }
});
