  /* form */
/* time stamp */

function setTimestamp() {
    const timestampElement = document.getElementById("timestamp");
    const currentDate = new Date();
    const formattedTimestamp = currentDate.toLocaleString();
    timestampElement.textContent = formattedTimestamp;
  }
  setTimestamp();