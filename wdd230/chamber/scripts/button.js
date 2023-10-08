const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('open'); 
});
