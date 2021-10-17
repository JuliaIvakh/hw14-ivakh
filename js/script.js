const userStr = prompt("Enter any string");
const userNum = +prompt("Enter any number");
const userSymb = prompt("Enter any symbol");
const userBool = prompt("Enter true/false");

function padString(str, num, symb, bool) {
  if (str === null) {
    return alert("error with a string");
  } else if (isNaN(num)) {
    return alert("error with a number");
  } else if (symb === null) {
    return alert("error with a symbol");
  } else if (bool != "true" && bool != "false") {
    return alert("error with a true/false");
  } else if (bool === "true" && str.length <= num) {
    return console.log(str + symb.repeat(num - str.length));
  } else if (bool === "false" && str.length <= num) {
    return console.log(symb.repeat(num - str.length) + str);
  } else if (str.length >= num) {
    return console.log(str.substr(0, num));
  }
}

padString(userStr, userNum, userSymb, userBool);
