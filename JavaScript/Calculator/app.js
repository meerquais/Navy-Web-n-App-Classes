var display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}



function allClear() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}
function equal() {
  display.value = eval(display.value);
}


