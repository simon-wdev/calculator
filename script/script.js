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
        previousValue = parseFloat(text.value); //parsing into integer
        text.value = btn.value;
        operator = btn.value;
        isSecond = true;
        text.value = ""; // gets removed for next value
        }else{
            if(!isOperatorSet){
            currentValue = parseFloat(text.value);
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
    currentValue = parseFloat(text.value);
    operate(previousValue, currentValue, operator)
    previousValue = result;
    operator = null;
}

function operate(previousValue, currentValue, operator){
    isSecond = false;
    isResult = true;
    switch(operator){
        case "+": 
            result = previousValue + currentValue;
                if(!Number.isInteger(result)){
                    result = parseFloat(result.toFixed(10));
                    text.value = result;
                }else{
                    text.value = Number(result.toPrecision(15));
                }
            break;
            
        case "-":
            result = previousValue - currentValue;
                if(!Number.isInteger(result)){
                    result = parseFloat(result.toFixed(10));
                    text.value = result;
                }else{
                    text.value = Number(result.toPrecision(15));
                }
            break;

        case "*":
            result = previousValue * currentValue;
                if(!Number.isInteger(result)){
                    result = parseFloat(result.toFixed(10));
                    text.value = result;
                }else{
                    text.value = Number(result.toPrecision(15));
                }
            break;

        case "/":
            if(currentValue === 0){
                result = "Syntax Error"
                text.value = result;
                break;
            }else{
                result = previousValue / currentValue;
                    if(!Number.isInteger(result)){
                        result = parseFloat(result.toFixed(10));
                        text.value = result;
                    }else{
                        text.value = Number(result.toPrecision(15));
                    }
                break;
            }

        case "%":
            result = previousValue % currentValue;
            if(!Number.isInteger(result)){
                result = parseFloat(result.toFixed(10));
                text.value = result;
            }else{
                text.value = Number(result.toPrecision(15));
            }
            break;
        
        case "^":
            result = previousValue ** currentValue;
            if(!Number.isInteger(result)){
                result = parseFloat(result.toFixed(10));
                text.value = result;
            }else{
                text.value = Number(result.toPrecision(15));
            }
            
    }
}

function setComma(){
    if(text.value.includes(".")){
        return;
    }else{
        text.value += ".";
    }
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