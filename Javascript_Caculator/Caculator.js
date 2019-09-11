let idText = document.getElementById("textview");
function addNumber(num) {
  idText.value += num;
  if (num == "c") {
    idText.value = "";
  }
}

function backSpace() {
  let x = idText.value;
  idText.value = x.substr(0, x.length - 1);
}

function runPlus() {
  idText.value += "+";
}

function runMinus() {
  idText.value += "-";
}

function runDivide() {
  idText.value += "/";
}

function runMultiply() {
 idText.value += "*";
}

function dotButton() {
  idText.value += ".";
}

function runEquals() {
  let equals = eval(idText.value);
  idText.value = equals;
}

function percent() {
  idText.value = idText.value / 100;
}

function powerButton() {
  idText.value = Math.pow(idText.value, 2);
}

function sqrtButton() {
  idText.value = Math.sqrt(idText.value);
}

function piButton() {
  idText.value = Math.PI;
}

function cosButton() {
  idText.value = Math.cos(idText.value);
}
