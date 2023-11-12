  /* members json data */


  const cardContainer = document.querySelector("#card-container");
  const membersUrl = "https://gcelesty.github.io/wdd230/chamber/data/members.json";
  
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
      img.setAttribute("alt", `${company.name} Logo`); // Set alt text
  
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
  
  /* drop down menu for directory page */

  const changeView = () => {
    const main = document.querySelector("#card-container");
    const selectedValue = document.querySelector("#view").value;
    
    if (selectedValue === "column") {
        main.classList.remove("grid");
        main.classList.add("column");
    } else if (selectedValue === "grid") {
        main.classList.remove("column");
        main.classList.add("grid");
    }
};

const changeViewVar = document.querySelector("#view");
if (changeViewVar) {
    changeViewVar.addEventListener("change", changeView);
}