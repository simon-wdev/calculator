const btns = document.querySelectorAll(".btnNum")
const btnOP = document.querySelectorAll(".btnOP")
let text = document.getElementById("text");

let result;
let currentValue;
let previousValue;
let isSecond = false;
let isResult = false;
let isOperatorSet = false;
let operator;


btns.forEach(btn => {
    btn.addEventListener("click", function(){
            if(isSecond){
                text.value += btn.value; //input + button text update;
            }else if(isResult){
                text.value = "" + btn.value; //adds directly a new value;
                isOperatorSet = false;
                isResult = false;
            }else{
                text.value += btn.value;
            }
    })
})

btnOP.forEach(btn => {
    btn.addEventListener("click", function(){
        if(!operator){
        previousValue = parseInt(text.value); //parsing into integer
        text.value = btn.value;
        operator = btn.value;
        isSecond = true;
        text.value = ""; // gets removed for next value
        }else{
            if(!isOperatorSet){
            currentValue = parseInt(text.value);
            operate(previousValue, currentValue, operator);
            previousValue = result;
            operator = btn.value;
            isOperatorSet = true;
            }else{
                operator = btn.value;
                return;
            }
        }
    });
});

function getRes(){
    currentValue = parseInt(text.value);
    operate(previousValue, currentValue, operator)
    previousValue = result;
    operator = null;
}

function operate(previousValue, currentValue, operator){
    isSecond = false;
    isResult = true;
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
    previousValue = null;
    currentValue = null;
    operator = null;
    isOperatorSet = false;
    isResult = false;
    isSecond = false;
}

function back(){
    text.value = text.value.substring(0, text.value.length - 1);
}