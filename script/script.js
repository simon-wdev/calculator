const btns = document.querySelectorAll(".btn")

let result;
let num1;
let num2;
let operator;

btns.forEach(btn => {
    btn.addEventListener("click", function(){
        let text = document.getElementById("text");
        text.value += btn.value;
    })
})

function add(num1, num2){
    return result = num1 + num2;
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

//function get currentOp, index of operators

function operate(num1, num2, currentOp){
    if(currentOp == 0){
        add(num1, num2)
    }else if(currentOp == 1){
        subtract(num1, num2)
    }else if (currentOp == 2){
        multiply(num1, num2)
    }else{
        divide(num1, num2)
    }
}

function userInput(){
    
}