// cleanSeats v0.13 14NOV22
function cleanSeats(colNumber) {
  var tableElem = window.document.getElementById("tickets");
  var tableBody = tableElem.getElementsByTagName("tbody").item(0);
  var i;
  var totalRows = tableBody.rows.length;
  for (
    i = 0;
    i < totalRows;
    i++ // skip first and last row (hence i=1, and howManyRows-1)
  ) {
    var thisTrElem = tableBody.rows[i];
    // user entry to javascript leading 0
    var thisTdElem = thisTrElem.cells[colNumber - 1];
    var thisTextNode = thisTdElem.textContent;
    if (thisTextNode != "undefined" && thisTextNode != "") {
      var seatArray = thisTextNode.split(" ");
      var showCleanSeats = "";
      for (var s in seatArray) {
        var cleanSeat = seatArray[s].split(":");
        cleanSeat[1] = "Sec: " + cleanSeat[1];
        cleanSeat[2] = " Row: " + cleanSeat[2];
        var spacer = cleanSeat[3].trim();
        var singleSeatCheck = spacer.split(",");
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
