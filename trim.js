export default function trim(string, chars, direction) {
  // console.log('String: "' + string + '"');
  if (string === undefined || typeof string !== "string") {
    return "";
  }
  if (chars === undefined || typeof chars !== "string") {
    chars = " \n";
  }

  if (
    direction === undefined ||
    typeof direction !== "string" ||
    ["start", "end", "both"].indexOf(direction) === -1
  ) {
    direction = "both";
  }
  const arr = Array.from(string);
  var first = 0;
  if (direction === "both" || direction === "start") {
    first = arr.findIndex(char => chars.indexOf(char) === -1);
    first = first === -1 ? 0 : first;
  }
  // console.log("First:", first);
  var last = 0;
  if (direction === "both" || direction === "end") {
    last = arr.reverse().findIndex(char => chars.indexOf(char) === -1);
    last = last === -1 ? 0 : last;
  }
  // console.log("Last:", last);
  var final = string.substring(first, string.length - last);
  // console.log('Final: "' + final + '"');
  return final;
}
