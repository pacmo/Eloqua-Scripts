// getPaid v0.4 14OCT22
function getPaid(tableId, colNumber) {
  // find the table with id attribute tableId
  // return the total of the numerical elements in column colNumber
  // skip the top row (th - table headers)

  var result = 0;

  try {
    var tableElem = window.document.getElementById(tableId);
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
      var thisTextNode = thisTdElem.innerHTML;
      var tdId = thisTdElem.id;
      let currency = thisTextNode.replace(/<\/?span[^>]*>/g, "");
      var number = Number(currency.replace(/[^0-9.-]+/g, ""));
      // try to convert text to numeric
      var thisNumber = parseFloat(thisTextNode.data);
      // if you didn't get back the value NaN (i.e. not a number), add into result
      if (!isNaN(number)) {
        if (tdId == "paid-total") {
          result -= number;
        } else {
          result += number;
        }
      }
    } // end for
  } catch (ex) {
    // end try
    console.log("Exception\n" + ex);
    result = 0;
  } finally {
    if (Number(result > 0)) {
      var ext =
        "($" +
        new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
          result
        ) +
        ")";
    } else {
      var ext =
        "$" +
        new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
          result
        );
    }
    document.getElementById("paid-total").innerHTML = ext;
    return ext;
  }
}
