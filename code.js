const calculation = document.getElementById("calculation");
const passedcalculation = document.getElementById("passedcalculation");


const zero = document.getElementById("0").addEventListener("click", function(){alter(0)});
const one = document.getElementById("1").addEventListener("click", function(){alter(1)});
const two = document.getElementById("2").addEventListener("click", function(){alter(2)});
const three = document.getElementById("3").addEventListener("click", function(){alter(3)});
const four = document.getElementById("4").addEventListener("click", function(){alter(4)});
const five = document.getElementById("5").addEventListener("click", function(){alter(5)});
const six = document.getElementById("6").addEventListener("click", function(){alter(6)});
const seven = document.getElementById("7").addEventListener("click", function(){alter(7)});
const eight = document.getElementById("8").addEventListener("click", function(){alter(8)});
const nine = document.getElementById("9").addEventListener("click", function(){alter(9)});
const divide = document.getElementById("divide").addEventListener("click", function(){alter("/")});
const multiply = document.getElementById("multiply").addEventListener("click", function(){alter("*")});
const minus = document.getElementById("-").addEventListener("click", function(){alter("-")});
const plus = document.getElementById("+").addEventListener("click", function(){alter("+")});
const equals = document.getElementById("=").addEventListener("click", sum);
const decimal = document.getElementById(".").addEventListener("click", alter);
const delet = document.getElementById("delete").addEventListener("click", alter);
const clear = document.getElementById("clear").addEventListener("click", reset);

let arr = [];

function alter(x){
    arr.push(x);
    calculation.innerText = arr;
    console.log(calculation.innerText);
}


function sum(){
    let sum = arr.reduce((a, b) => a-b, 0);
    passedcalculation.innerText = sum;
}

function reset(){
    arr = [];
    passedcalculation.innerText = "";
    calculation.innerText = "";
}

