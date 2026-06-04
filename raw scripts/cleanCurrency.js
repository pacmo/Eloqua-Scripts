// cleanCurrency v0.1.1 Custom 10DEC24
function cleanCurrency(tableId, colNum) {
  var result = 0;
  var tableElem = window.document.getElementById(tableId);
  var tableBody = tableElem.getElementsByTagName("tbody").item(0);
  var i;
  var totalRows = tableBody.rows.length;
  for (i = 0; i < (totalRows); i++) // skip first and last row (hence i=1, and howManyRows-1)
  {
    var thisTrElem = tableBody.rows[i];
    // user entry to javascript leading 0
    var thisTdElem = thisTrElem.cells[colNum - 1];
    var thisTextNode = thisTdElem.innerHTML;
    var thiscurrency = thisTextNode.replace(/<\/?span[^>]*>/g, "");
    number = Number(thiscurrency.replace(/[^0-9.-]+/g, ""));
    // if you didn't get back the value NaN (i.e. not a number), add into result
    if (!isNaN(number)) {
      var ext = "$" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(number);
      thisTdElem.innerHTML = ext;
    }
  } // end for
}
