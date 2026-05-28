// addUnitPrice v0.2 3MAR23
function addUnitPrice(qtyCol, totalCol) {
  var tableElem,
    tableBody = window.document
      .getElementById("tickets")
      .getElementsByTagName("tbody")
      .item(0),
    i,
    totalRows = tableBody.rows.length;
  add_a_th_col("Unit Price", 3);
  add_a_td_col(3);

  for (i = 0; i < totalRows; i++) {
    var thisTrElem,
      thisTdQty = tableBody.rows[i].cells[qtyCol - 1],
      thisQtyTextNode = thisTdQty.textContent,
      thisTdAmt = tableBody.rows[i].cells[totalCol - 1],
      thisAmtTextNode = thisTdAmt.textContent;
    let currency = thisAmtTextNode.replace(/<\/?span[^>]*>/g, "");
    let number = Number(currency.replace(/[^0-9.-]+/g, ""));
    let perUnit = Number(number / thisQtyTextNode);
    console.log("thisQtyTextNode: " + thisQtyTextNode);
    console.log("thisAmtTextNode: " + number);
    console.log("perUnit: " + perUnit);
    var cleanPerUnit =
      "$" +
      new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
        perUnit
      );
    tableBody.rows[i].cells[totalCol - 2].innerText = cleanPerUnit;
    console.log("cpu: " + cleanPerUnit);
  }
}
