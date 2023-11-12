/* DropDown Menu Configuration */
const button = document.querySelector("#menu");
const navList = document.querySelector("nav");
button.addEventListener("click", () => {
  navList.classList.toggle("open");
});

/* button */
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('open'); 
});