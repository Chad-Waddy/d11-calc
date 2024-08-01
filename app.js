function clearScreen() {
    document.getElementById('output').value = '';
}

function display(param) { 
    document.getElementById('output').value += param;
}

function solve() {
    // grab the value of the imput box
    var x = document.getElementById('output').value;

    // solve the expression and asign it variable Y
    var y = eval(x);

    // display y in the imput box 
    document.getElementById('output').value = y;
}

// clear screen button %
document.getElementById('btnClear').addEventListener('click', clearScreen);

// solve button ########
document.getElementById('btnSolve').addEventListener('click', solve)

//############
// btn1
document.getElementById('btn1').addEventListener('click', 
    function btnOne() {
        display('1');
});

// btn2
document.getElementById('btn2').addEventListener('click', 
    function () {
        display('2');
    }
);

// btn4
document.getElementById('btn3').addEventListener('click', 
    () => {
        display('3');
    }
);

// btn4
document.getElementById('btn4').addEventListener('click', () => {display('4');});

// btn5
var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {display('5');});

// btn6
var btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {display('6');});

// btn7
var btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {display('7');});
// btn8
var btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {display('8');});
// btn9
var btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {display('9');});
// btn4 0
var btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {display('0');});
 //go to btndot, add
var btndot = document.getElementById('btnDot');
btndot.addEventListener('click', () => {display('.');});






