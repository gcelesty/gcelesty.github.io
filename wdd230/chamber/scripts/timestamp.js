document.addEventListener("DOMContentLoaded", function () {
  // Your timestamp.js code here
  const timestampElement = document.getElementById("timestamp");
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toLocaleString();
  timestampElement.textContent = formattedTimestamp;
});