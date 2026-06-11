// sumColumn v0.3 4APR24
function sumColumn(tableId, column) {
  var tableElem = window.document.getElementById(tableId);
  var tableBody = tableElem.getElementsByTagName("tbody").item(0);
  var i;
  var totalRows = tableBody.rows.length;
  var sum = 0;
  for (var i = 0; i < totalRows; i++) {
    let colText = tableBody.rows[i].cells[column - 1].textContent;
    let output = colText.replace(/,/g, "");
    output = output.replace(/[^0-9]/, "");
    output = parseFloat(output);
    if (isNaN(output)) {
      output = 0;
    } else {
      sum += Number(output);
    }
  }
  return sum;
}
