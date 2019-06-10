var idText = document.getElementById("textview");

function addNumber(num) {
    idText.value += num;
    if (num == "c") {
        idText.value = "";
    }
}

function backSpace() {
    var x = idText.value;
    var y = x.length - 1;
    var newnumber = x.substring(0, y);
    idText.value = newnumber;
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
    var equals = eval(idText.value);
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