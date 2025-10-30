const btns = document.querySelectorAll(".btnNum")
const btnOP = document.querySelectorAll(".btnOP")
const btnEV = document.querySelector(".btnEV")

let result;
let currentValue;
let previousValue;
let isSecond;
let operator;
let text = document.getElementById("text");


btns.forEach(btn => {
    btn.addEventListener("click", function(){
            if(isSecond){
                text.value += btn.value;
            }else{
                text.value += btn.value;
            }
    })
})

btnOP.forEach(btn => {
    btn.addEventListener("click", function(){
        previousValue = parseInt(text.value);
        text.value = btn.value;
        operator = btn.value;
        isSecond = true;
        text.value = "";
    });
});

function operate(previousValue, operator){
    currentValue = parseInt(text.value);
    if (operator == "+"){
        add(previousValue, currentValue);
        isSecond = false;
    }
}

function add(num1, num2){
    result = num1 + num2;
    text.value = result;
}

function subtract(num1, num2){
    return result = num1 - num2;
}

function multiply(num1, num2){
    return result = num1 * num2;
}

function divide(num1, num2){
    return result = num1 / num2;
}

