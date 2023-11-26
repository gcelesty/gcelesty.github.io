// menu.js

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const navLinksContainer = document.getElementById("navLinksContainer");

    // Add click event listener to the menu button
    menuButton.addEventListener("click", function () {
        // Toggle the visibility of the navigation links container
        navLinksContainer.style.display = (navLinksContainer.style.display === "block") ? "none" : "block";
    });

    // Close the navigation links when a link is clicked
    const navLinks = document.querySelectorAll("#navLinksContainer ol li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinksContainer.style.display = "none";
        });
    });
});
