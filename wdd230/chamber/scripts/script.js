/* button */
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('open'); 
});

/* get dates */
document.getElementById("currentyear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`

/* last visit */
const msToDays = 84600000; // using to convert to ms to days

if (localStorage.getItem("lastVisitDate")) {
    const lastVisitDate = new Date(
      localStorage.getItem("lastVisitDate")
    ).getTime();
    const today = Date.now();
    let daysDifference = (today - lastVisitDate) / msToDays;
    let message = "";
  
    if (daysDifference < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysDifference >= 1) {
      if (daysDifference > 1 && daysDifference < 2) {
        message = `Your last visit was ${Math.floor(daysDifference)} day ago`;
      } else {
        message = `Your last visit was ${Math.floor(daysDifference)} days ago`;
      }
    }
  
    // Move this line outside of the if and else if blocks
    const divLastVisit = document.querySelector("#last-visit");
    divLastVisit.textContent = message;
  
    localStorage.setItem("lastVisitDate", todaysDate);
  } else {
    // If this is the first visit, display a welcome message
    document.getElementById("last-visit").textContent =
      "Welcome! Let us know if you have any questions.";
  }