// cleanSeats v0.13.1 CUSTOM 17MAY23
function cleanSeats(colNumber) {
  var tableElem,
    tableBody = window.document
      .getElementById("tickets")
      .getElementsByTagName("tbody")
      .item(0),
    i,
    totalRows = tableBody.rows.length;
  for (i = 0; i < totalRows; i++) {
    var thisTrElem,
      thisTdElem = tableBody.rows[i].cells[colNumber - 1],
      thisTextNode = thisTdElem.textContent,
      // last check is for whitespace only - required for PM App
      thisDescElem = tableBody.rows[i].cells[0],
      descNode = thisDescElem.textContent;
    if (
      typeof thisTextNode !== "undefined" &&
      thisTextNode !== "" &&
      thisTextNode.replace(/\s/g, "").length
    ) {
      var seatArray = thisTextNode.split(" "),
        showCleanSeats = "";
      for (var s in seatArray) {
        var cleanSeat = seatArray[s].split(":");
        // update PARKING
        if (descNode.indexOf("Parking") > -1) {
          thisTdElem.innerHTML = "LOT: " + cleanSeat[1];
        } else {
          (cleanSeat[1] = "Sec: " + cleanSeat[1]),
            (cleanSeat[2] = " Row: " + cleanSeat[2]);
          var spacer,
            singleSeatCheck = cleanSeat[3].trim().split(",");
          singleSeatCheck[0] === singleSeatCheck[1]
            ? (cleanSeat[3] = singleSeatCheck[0])
            : (cleanSeat[3] = cleanSeat[3].replace(/,/g, "-")),
            (cleanSeat[3] = " Seat(s): " + cleanSeat[3]),
            cleanSeat.shift(),
            (seatArray[s] = cleanSeat.join(":")),
            (showCleanSeats += seatArray[s] + "<br>"),
            (thisTdElem.innerHTML = showCleanSeats);
        }
      }
    }
  }
}
