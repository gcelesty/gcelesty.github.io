const baseURL = "https://gcelesty.github.io/wdd230/0-scoots/";
const linksURL = "https://gcelesty.github.io/wdd230/0-scoots/data/vechicle.json";

async function getVehicles() {
    try {
      const response = await fetch(linksURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayVehicles(data.vechicles);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
getVehicles();

const tableDiv = document.getElementById("table");

const displayVehicles = function (vehicles) {
    const table = document.createElement("table");
  
    // Create table rows for each vehicle
    vehicles.forEach((vehicle) => {
      const row = document.createElement("tr");
      for (const key in vehicle) {
        const cell = document.createElement("td");
        cell.textContent = vehicle[key];
        row.appendChild(cell);
      }
      table.appendChild(row);
    });
  
    // Append the table to the tableDiv
    tableDiv.appendChild(table);
  };
  