document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'all 0.5s ease-in-out';

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }, 100);
});
