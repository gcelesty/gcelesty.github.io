document.addEventListener("DOMContentLoaded", function () {
    // Check if it's Monday, Tuesday, or Wednesday
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (currentDay >= 1 && currentDay <= 3) {
        // Show the banner only on Monday, Tuesday, and Wednesday
        const banner = document.getElementById("meetAndGreetBanner");
        banner.style.display = "block";
    }
});

// Function to close the banner
function closeBanner() {
    const banner = document.getElementById("meetAndGreetBanner");
    banner.style.display = "none";
}