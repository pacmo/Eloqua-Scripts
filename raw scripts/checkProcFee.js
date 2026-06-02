//  checkProcFee v0.4 29MAR24
function checkProcFee() {
  // if no grand total, change proc-fee to $0 and run grand totals
  // To Be Added: pull last column of getSubTotal

  var result = 0;
  var pfee = document.getElementById("proc-fee").innerText;
  var gtotal = document.getElementById("totals-table-total").innerText;
  var number = Number(gtotal.replace(/[^0-9.-]+/g, ""));
  var numberClean = parseFloat(number).toFixed(2);

  //  console.log("pfee: " + pfee);
  //  console.log("gtotal: " + gtotal);
  if (pfee === numberClean) {
    result = 0;
    let ext =
      "$" +
      new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
        result
      );
    document.getElementById("proc-fee").innerHTML = ext;
    getGrandTotal(); // provides grand total
  }
}
