let seatsOverride = [{ fancy: true }];

// cleanSeats v0.3 6JUN23
function cleanSeats(colNumber) {
  const tableElem = window.document.getElementById("tickets");
  const tableBody = tableElem.getElementsByTagName("tbody").item(0);
  const i;
  const totalRows = tableBody.rows.length;
  for (
    i = 0;
    i < totalRows;
    i++ // skip first and last row (hence i=1, and howManyRows-1)
  ) {
    let thisTrElem = tableBody.rows[i];
    // user entry to javascript leading 0
    let thisTdElem = thisTrElem.cells[colNumber - 1];
    let thisTextNode = thisTdElem.textContent;
    // 3rd check is for PMAPP blank space
    if (Array.isArray(seatsOverride) && seatsOverride.length == 0) {
      // array is empty
      console.log("seatsOverride is empty");
    } else {
      console.log("This is Justin. Whatchya got for me.");
    }
    if (
      thisTextNode != "undefined" &&
      thisTextNode != "" &&
      thisTextNode.replace(/\s/g, "").length
    ) {
        let seatArray = thisTextNode.split(" ");
        let showCleanSeats = "";
        for (let s in seatArray) {
          let cleanSeat = seatArray[s].split(":");
          cleanSeat[1] = "Sec: " + cleanSeat[1];
          cleanSeat[2] = " Row: " + cleanSeat[2];
          let spacer = cleanSeat[3].trim();
          let singleSeatCheck = spacer.split(",");
          if (singleSeatCheck[0] === singleSeatCheck[1]) {
            cleanSeat[3] = singleSeatCheck[0];
          } else {
            cleanSeat[3] = cleanSeat[3].replace(/,/g, "-");
          }
          cleanSeat[3] = " Seat(s): " + cleanSeat[3];
          cleanSeat.shift();
          seatArray[s] = cleanSeat.join(":");
          showCleanSeats += seatArray[s] + "<br>";
          thisTdElem.innerHTML = showCleanSeats;
        } // end for
    } // end if
  }
}

// getColIndex v0.1 1JUN23
// get column from header text - helper function for cleanSeats
function getColIndex(headerText) {
  var table = document.getElementById("myTable");
  var headers = table.rows[0].cells;
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].textContent.indexOf(headerText) > -1) {
      return i;
    }
  }
  return -1; // not found
}
