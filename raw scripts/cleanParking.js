// cleanParking v1.0 20FEB25
// using "General Admission" will include that in seats section. Using "Section: " will include the section in the seating area.
function cleanParking(colNumber, pretext = "") {
    let tableElem = document.getElementById("tickets");
    if (!tableElem) return;

    let tableBody = tableElem.querySelector("tbody");
    if (!tableBody) return;

    let totalRows = tableBody.rows.length;

    // Skip first and last row
    for (let i = 1; i < totalRows - 1; i++) {
        let thisTrElem = tableBody.rows[i];
        let thisTdElem = thisTrElem.cells[colNumber - 1];
        if (!thisTdElem) continue;

        let thisTextNode = thisTdElem.textContent.trim();
        let descElem = thisTrElem.cells[0];
        let descNode = descElem.textContent.trim().toUpperCase();

        if (thisTextNode.length > 0 && descNode.includes("PARKING")) {
            let seatArray = thisTextNode.split(" ");
            let cleanSeats = [];

            for (let seat of seatArray) {
                let cleanSeat = seat.split(":");
                let parkSec = cleanSeat[1] || ""; // Avoid undefined issues

                if (pretext.toUpperCase() === "GENERAL ADMISSION") {
                    cleanSeats = [pretext]; 
                    break; // No need to process further
                } else if (pretext === "") {
                    cleanSeats = [""];
                    break;
                } else {
                    cleanSeats.push(pretext + parkSec);
                }
            }

            thisTdElem.innerHTML = cleanSeats.join(" ");
        }
    }
}

