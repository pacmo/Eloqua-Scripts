// setProcFee v.0.2 15JUN23
// requires inRange function, procFeeArray
function setProcFee(array) {
  let pFee = 0;
  array.forEach((item) => {
    if (typeof item.max === "undefined") {
      item.max = 999999999;
    }
    let tixTot = window.document.getElementById("tickets-total").innerText;
    tixTot = tixTot.replace(/<\/?span[^>]*>/g, "");
    tixTot = Number(tixTot.replace(/[^0-9.-]+/g, ""));
    if (inRange(tixTot, item.min, item.max)) {
      pFee = item.fee;
    }
  });
  pFee =
    "$" +
    new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(pFee);
  document.getElementById("proc-fee").innerHTML = pFee;
}
