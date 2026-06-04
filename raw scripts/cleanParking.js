
// cleanParking v1.1 6MAR25
// using "General Admission" will include that in seats section. Using "Section: " will include the section in the seating area.

function cleanParking(colNumber, pretext = "") {
    let tableElem = document.getElementById("tickets");
    if (!tableElem) return;

    let tableBody = tableElem.querySelector("tbody");
    if (!tableBody) return;

    let totalRows = tableBody.rows.length;

    // Iterate through all rows
    for (let i = 0; i < totalRows; i++) {
        let thisTrElem = tableBody.rows[i];
        let thisTdElem = thisTrElem.cells[colNumber - 1];
        if (!thisTdElem) continue;

        let descElem = thisTrElem.cells[0];
        let descNode = descElem.textContent.trim().toUpperCase();

        // If the description contains "PARKING", update the cell text
        if (descNode.includes("PARKING")) {
            if (pretext.toUpperCase() === "GENERAL ADMISSION") {
                thisTdElem.innerHTML = pretext;
            } else {
                thisTdElem.innerHTML = pretext || ""; // Set to pretext or empty if not provided
            }
        }
    }
}
