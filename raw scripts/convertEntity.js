// convert v 0.1 4JAN2023
// convert entity characters
function convert(string) {
  var multiple = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "`",
  };
  for (var char in multiple) {
    var before = char;
    var after = multiple[char];
    var pattern = new RegExp(before, "g");
    string = string.replace(pattern, after);
  }
  return string;
}
