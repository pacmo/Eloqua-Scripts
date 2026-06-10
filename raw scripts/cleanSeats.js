// cleanSeats v1.0 06JAN25
function cleanSeats(colNumber) {
  const tableElem = document.getElementById("tickets");
  const tableBody = tableElem.querySelector("tbody");
  const totalRows = tableBody.rows.length;

  for (let i = 0; i < totalRows; i++) {
    const thisTrElem = tableBody.rows[i];
    const thisTdElem = thisTrElem.cells[colNumber - 1];
    const thisTextNode = thisTdElem.textContent.trim();

    if (thisTextNode) {
      const seatArray = thisTextNode.split(" ");
      const cleanedSeats = [];

      for (let seat of seatArray) {
        const cleanSeat = seat.split(":");
        cleanSeat[1] = `Sec: ${cleanSeat[1]}`;
        cleanSeat[2] = ` Row: ${cleanSeat[2]}`;

        if (cleanSeat[3]) {
          const spacer = cleanSeat[3].trim();
          const singleSeatCheck = spacer.split(",");
          
          cleanSeat[3] = singleSeatCheck[0] === singleSeatCheck[1] 
            ? ` Seat: ${singleSeatCheck[0]}`
            : ` Seat(s): ${spacer.replace(/,/g, "-")}`;
        }

        cleanedSeats.push(cleanSeat.slice(1).join(":"));
      }

      // Safely update the cell content
      thisTdElem.innerHTML = cleanedSeats.map(seat => `${seat}<br>`).join("");
    }
  }
}
