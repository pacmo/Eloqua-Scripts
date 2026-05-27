// sumColumn v0.2 6JUN23
function sumColumn(tableId, column) {
  var tableElem = window.document.getElementById(tableId);
  var tableBody = tableElem.getElementsByTagName("tbody").item(0);
  var i;
  var totalRows = tableBody.rows.length;
  var sum = 0;
  for (var i = 0; i < totalRows; i++) {
    let colText = parseFloat(tableBody.rows[i].cells[column - 1].textContent);
    if (isNaN(colText)) {
      colText = 0;
    } else {
      sum += Number(colText);
    }
  }
  return sum;
}
