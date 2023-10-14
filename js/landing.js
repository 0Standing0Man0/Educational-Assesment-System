let currentSlide = 1;

function nextSlide() {
    if (currentSlide < 3) {
        currentSlide++;
        for (let i = 1; i <= 3; i++) {
            const slide = document.querySelector(`.slide${i}`);
            slide.style.transform = `translateX(-${(currentSlide - 1) * 0}%)`;
        }
    }
}

function showLoginForm() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
}

function showSignupForm() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}s