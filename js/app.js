const collapseButton = document.getElementById('collapse-butto');
const navLinks = document.getElementById('nav-links');

collapseButton.addEventListener('click', function showNavbas(event) {
    console.log('hola')
    if(Array.prototype.includes.call(navLinks.classList, 'show-nav')) {
        navLinks.classList = 'nav-links'
    } else {
        navLinks.classList += ' show-nav';
    }
})