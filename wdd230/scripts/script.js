const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("open");
  button.classList.toggle("open");
});


/*Dark mode*/
const darkMode = document.querySelector("#darkMode");
const main = document.querySelector("main");
const a = document.querySelectorAll("main .card1 ul li a");

darkMode.addEventListener("click", () => {
  if (darkMode.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    a.forEach((link) => {
      link.style.color = "#fff";
    });
    darkMode.textContent = "🔆";
  }else {
    main.style.background = "#fff";
    main.style.color = "#000";
    a.forEach((link) => {
      link.style.color = "#000";
    });
    darkMode.textContent = "🕶️";
  }
});