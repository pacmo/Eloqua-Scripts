// addFee v0.1 31JAN23
// adds checkbox input value to totals
function addFee(cb) {
  let cbValue = cb.value;
  let cbName = cb.name;
  let cbNameList = document.getElementsByName(cb.name);
  let cbId = cb.id;
  let ischecked = check(cbId);
  let updateValue = 0;
  if (ischecked) {
    updateValue = cbValue;
  } else {
    updateValue = 0;
  }
  let delFee =
    "$" +
    new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
      updateValue
    );
  document.getElementById("delivery-items-total").innerHTML = delFee;
  let inputList = document
    .getElementById("delivery-inputs")
    .getElementsByTagName("input").name;
  checkBoxDisable(cb);
  getGranderTotal();
  checkProcFee();
}
