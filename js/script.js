document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuNav = document.querySelector('.menu-nav');
    hamburger.addEventListener('click', function () {
        menuNav.classList.toggle('active');
    });
    function createStars() {
        const starContainer = document.querySelector('.star-container');

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDuration = Math.random() * 2 + 3 + 's';

            starContainer.appendChild(star);
        }
    }

    createStars();
});
