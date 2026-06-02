// checkBoxDisable v.0.1 31JAN23
// disables all unchecked checkboxes
function checkBoxDisable(checkType) {
  let checkName = document.getElementsByName(checkType.name);
  let checked = document.getElementById(checkType.id);
  if (checked.checked) {
    for (var i = 0; i < checkName.length; i++) {
      if (!checkName[i].checked) {
        checkName[i].disabled = true;
      } else {
        checkName[i].disabled = false;
      }
    }
  } else {
    for (var i = 0; i < checkName.length; i++) {
      checkName[i].disabled = false;
    }
  }
}
