const btns = document.querySelectorAll(".btnNum")
const btnOP = document.querySelectorAll(".btnOP")
let text = document.getElementById("text");

let result;
let currentValue;
let previousValue;
let isSecond = false;
let isResult = false;
let operator;



btns.forEach(btn => {
    btn.addEventListener("click", function(){
            if(isSecond){
                text.value += btn.value; //input + button text update;
            }else if(isResult){
                text.value = ""; //clears value on button press
                isResult = false;
            }else{
                text.value += btn.value;
            }
    })
})

btnOP.forEach(btn => {
    btn.addEventListener("click", function(){
        previousValue = parseInt(text.value); //parsing into integer
        text.value = btn.value;
        operator = btn.value;
        isSecond = true;
        text.value = ""; // gets removed for next value
    });
});

function operate(previousValue, operator){
    isSecond = false;
    isResult = true;
    currentValue = parseInt(text.value);
    switch(operator){
        case "+":
            add(previousValue, currentValue);
            break;

        case "-":
            subtract(previousValue,currentValue);
            break;

        case "*":
            multiply(previousValue,currentValue);
            break;

        case "/":
            divide(previousValue,currentValue);
            break;

        case "%":
            modulo(previousValue, currentValue);
            break;
        
        case "^":
            power(previousValue,currentValue);
            
    }
}

function add(num1, num2){
    result = num1 + num2;
    text.value = result;
}

function subtract(num1, num2){
    result = num1 - num2;
    text.value = result;
}

function multiply(num1, num2){
    result = num1 * num2;
    text.value = result;
}

function divide(num1, num2){
    result = num1 / num2;
    text.value = result;
}

function modulo(num1, num2){
    result = num1 % num2;
    text.value = result;
}

function power(num1, num2){
    result = num1**num2;
    text.value = result;
}

function clearText(){
    text.value = "";
    previousValue = "";
    currentValue = "";
}

function back(){
    text.value = text.value.substring(0, text.value.length - 1);
}