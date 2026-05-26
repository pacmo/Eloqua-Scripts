// getGrandTotal v0.2 26OCT22
function getGrandTotal() {
  var result = 0;
  var tableElem = window.document.getElementById("totals-table");
  var tableBody = tableElem.getElementsByTagName("tbody").item(0);
  var totalRows = tableBody.rows.length;
  for (var i = 0; i < (totalRows); i++) // skip first and last row (hence i=1, and howManyRows-1)
  {
    var thisTrElem = tableBody.rows[i];
    // user entry to javascript leading 0
    var thisTdElem = thisTrElem.cells[1];
    var thisTdId = thisTdElem.id;
    console.log("tdId " + thisTdElem.id);
    var thisTextNode = thisTdElem.innerHTML;
    let currency = thisTextNode.replace(/<\/?span[^>]*>/g, "");
    var number = Number(currency.replace(/[^0-9.-]+/g, ""));
    // try to convert text to numeric
    var thisNumber = parseFloat(thisTextNode.data);
    // if you didn't get back the value NaN (i.e. not a number), add into result
    if (!isNaN(number)) {
      if (thisTdId == "paid-total") {
        result -= number;
      } else {
        result += number;
      }
    }
  } // end for
  var grandTotal = result.toFixed(2);
  console.log(grandTotal);
  grandTotal = "$" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(grandTotal);
  document.getElementById("totals-table-total").innerHTML = grandTotal;
  return grandTotal;
}


