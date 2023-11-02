/* last modification date*/

//Display the year at the bottom of the page
const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

//DropDown Menu Configuration
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

  /*Form*/
/*Time Stamp */

function setTimestamp() {
    const timestampElement = document.getElementById("timestamp");
    const currentDate = new Date();
    const formattedTimestamp = currentDate.toLocaleString();
  }
  setTimestamp();
  
  // Members Dinamically
  
  const cardContainer = document.querySelector("#card-container");
  const membersUrl = "https://ggrados.github.io/wdd230/chamber/data/members.json";
  
  async function getMembers() {
    try {
      const response = await fetch(membersUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayMembers(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function displayMembers(membersData) {
    membersData.companies.forEach((company) => {
      const article = document.createElement("article");
      article.classList.add("container");
  
      const h2 = document.createElement("h2");
      h2.textContent = company.name;
  
      const address = document.createElement("p");
      address.textContent = company.address;
  
      const phoneNumber = document.createElement("p");
      phoneNumber.textContent = company.phoneNumber;
  
      const website = document.createElement("a");
      website.setAttribute("href", company.websiteURL);
      website.textContent = company.websiteURL;
      website.classList.add("memberLink");
  
      const memberShipLevel = document.createElement("p");
      memberShipLevel.textContent = `MemberShip Level: ${company.membershipLevel}`;
  
      const img = document.createElement("img");
      img.setAttribute("src", company.image);
  
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(address);
      article.appendChild(phoneNumber);
      article.appendChild(website);
      article.appendChild(memberShipLevel);
  
      cardContainer.appendChild(article);
    });
  }
  
  if (cardContainer) {
    getMembers();
  }
  