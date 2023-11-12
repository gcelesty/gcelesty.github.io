const menuButton = document.getElementById('menu');
const navLinksContainer = document.getElementById('navLinksContainer');

menuButton.addEventListener('click', function() {
    navLinksContainer.classList.toggle('open');
});
