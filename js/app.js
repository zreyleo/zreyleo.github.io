const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementsByClassName('nav__link');

navToggle.addEventListener('click', function () {
    document.body.classList.toggle('nav-open')
});

Array.prototype.forEach.call(navLinks, link => {
    link.addEventListener('click', function () {
        document.body.classList.remove('nav-open')
    })
})