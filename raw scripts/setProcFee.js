// setProcFee v.0.1 15JUN23
// requires inRange
function setProcFee() {
  let tixTot = window.document.getElementById("tickets-total").innerText;
  tixTot = tixTot.replace(/<\/?span[^>]*>/g, "");
  tixTot = Number(tixTot.replace(/[^0-9.-]+/g, ""));
  let procFee = 0;
  if (inRange(tixTot, 1, 600)) {
    procFee = 20;
  }
  if (inRange(tixTot, 601.01, 1500)) {
    procFee = 25;
  }
  if (inRange(tixTot, 1501.01)) {
    procFee = 30;
  }
  console.log("tixTot: " + tixTot);
  console.log("procFee: " + procFee);
}
