const url = "https://gcelesty.github.io/wdd230/0-scoots/data/vechicle.json";
const tableDiv = document.getElementById("table");

async function getVehicleData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.table(data.vechicles);
    displayVehicles(data.vechicles);
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
  }
}

const displayVehicles = (vehicles) => {
  // Create the table
  const table = document.createElement("table");

  // Create data rows
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];
    const row = document.createElement("tr");

    // Create table cells for each property
    Object.keys(vehicle).forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = vehicle[key];
      row.appendChild(cell);
    });

    // Append the row to the table
    table.appendChild(row);
  }

  // Append the table to the tableDiv
  tableDiv.appendChild(table);
};

getVehicleData();