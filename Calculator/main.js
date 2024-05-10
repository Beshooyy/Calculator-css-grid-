const on_screen = document.getElementById("on_screen");

function addToScreen(input){
    on_screen.value += input;

}

function clearScreen() {
    on_screen.value="";
}

function calculate() {
    on_screen.value = eval(on_screen.value);
}