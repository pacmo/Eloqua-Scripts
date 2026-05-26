// cleanParking v0.1 15FEB24
function cleanParking(colNumber, pretext) {
  let tableElem = window.document.getElementById("tickets");
  let tableBody = tableElem.getElementsByTagName("tbody").item(0);
  let i;
  let totalRows = tableBody.rows.length;
  for (
    i = 0;
    i < totalRows;
    i++ // skip first and last row (hence i=1, and howManyRows-1)
  ) {
    let thisTrElem = tableBody.rows[i];
    // user entry to javascript leading 0
    let thisTdElem = thisTrElem.cells[colNumber - 1];
    let thisTextNode = thisTdElem.textContent;
    let descElem = thisTrElem.cells[0];
    let descNode = descElem.textContent.toUpperCase();
    // 3rd check is for PMAPP blank space; 4th Check is for parking in description
    if (
      thisTextNode != "undefined" &&
      thisTextNode != "" &&
      thisTextNode.replace(/\s/g, "").length &&
      descNode.indexOf("PARKING") > -1
    ) {
      let seatArray = thisTextNode.split(" ");
      let showCleanSeats = "";
      for (var s in seatArray) {
        let cleanSeat = seatArray[s].split(":");
        let parkSec = cleanSeat[1];
        if (pretext.toUpperCase() == "GENERAL ADMISSION") {
          showCleanSeats = pretext;
          thisTdElem.innerHTML = showCleanSeats;
        } else if (pretext == "") {
          thisTdElem.innerHTML = pretext;
        } else {
          showCleanSeats = pretext + parkSec;
          thisTdElem.innerHTML = showCleanSeats;
        }
      } // end for
    } // end if
  }
}
