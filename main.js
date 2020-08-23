const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-bar');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-bar--visible');
})
