function add() {
    let add = document.getElementById("result").value;
    let ans = eval(add);
    document.getElementById("result").value = ans;
}

function subtract() {
    let subtract = document.getElementById("result");
    let ans = eval(subtract);
    document.getElementById("result").value = ans;
}

function divide() {
    let divide = document.getElementById("result");
    let ans = eval(divide);
    document.getElementById("result").value = ans;
}

function multiply() {
    let multiply = document.getElementById("result").value;
    let ans = eval(multiply);
    document.getElementById("result").value = ans;
}

function operate() {
    let operator = document.getElementById("result").value;
    if (operator == "+") {
        return add();
    }
    if (operator == "-") {
        return subtract();
    }
    else if (operator == "/") {
        return divide();
    }
    else {
        return multiply();
    }
    
}

function display(displayValue) {
    document.getElementById("result").value += displayValue;
}

function clear() {
    document.getElementById("result").value = "";
}