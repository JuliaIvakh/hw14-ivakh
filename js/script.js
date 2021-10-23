function padString(str, num, symb = "", right = true) {
  if (typeof str !== "string") return "error with a string";
  if (typeof num !== "number" && isNaN(num))
    return "error with a string length";
  if (typeof symb !== "string" && symb.length !== 1)
    return "error with a symbol";
  if (typeof right !== "boolean") return "error with a side";
  if (str.length >= num) return str.substring(0, num);

  let localString = "";

  for (let i = str.length; i < num; i++) {
    localString += symb;
  }

  return right ? str + localString : localString + str;
}

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));
