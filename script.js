var numDisplay = document.getElementById("display");

var num1 = "";
var num2 = "";
var operator = "";
var answer = 0;

function calculate() {
    switch (operator){
        case '+':
            answer = Number(num1)+Number(num2);
            console.log(answer);
            break;
        case '-':
            answer = Number(num1)-Number(num2);
            console.log(answer);
            break;
        case '*':
            answer = Number(num1)*Number(num2);
            console.log(answer);
            break;
        case '/':
            answer = Number(num1)/Number(num2);
            console.log(answer);
            break;
    }
    numDisplay.innerText = answer;
    // console.log("num1:",num1)
    // console.log("num2:",num2)
    num1 = answer
    num2 = ""
}

function press(num) {
    if (operator==="") {
        num1 += num;
        numDisplay.innerText = num1;
        
    } else if (operator!=="") {
        num2 += num
        numDisplay.innerText = num2;
    }
}

function setOP(oper) {
    operator = oper
}

function clr() {
    num1 = ""
    num2 = ""
    operator = ""
    answer = 0
}