//button listener
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
const divide = document.getElementById("divide").addEventListener("click", function(){operator("/")});
const multiply = document.getElementById("multiply").addEventListener("click", function(){operator("*")});
const minus = document.getElementById("-").addEventListener("click", function(){operator("-")});
const plus = document.getElementById("+").addEventListener("click", function(){operator("+")});
const equals = document.getElementById("=").addEventListener("click", function(){operator("=")});
const decimal = document.getElementById(".").addEventListener("click", function(){deci()});
const delet = document.getElementById("delete").addEventListener("click", function(){del()});
const clear = document.getElementById("clear").addEventListener("click", reset);

const calculation = document.getElementById("calculation");
const passedcalculation = document.getElementById("passedcalculation");

let arraysum = [];
let sum = 0;
let x;
let reduce = 0;

function alter(x){
    calculation.innerText += x;
}

function operator(y){
    if(calculation.innerText === ""){
        sum = Number(passedcalculation.innerText);
        arraysum.push(sum);
        reduce = arraysum.reduce((a, b) => {
        if(x === "="){return a};
        if(x === "+"){return a + b};
        if(x === "-"){return a - b};
        if(x === "/"){return a / b};
        if(x === "*"){return a * b};
    });
    }
    else{
        sum = Number(calculation.innerText);
        arraysum.push(sum);
        reduce = arraysum.reduce((a, b) => {
        if(x === "/" && sum === 0){return divizero()};
        if(x === "="){return a};
        if(x === "+"){return a + b};
        if(x === "-"){return a - b};
        if(x === "/"){return a / b};
        if(x === "*"){return a * b};
    });

    }
    calculation.innerText = "";
    passedcalculation.innerText = (reduce % 1 !== 0) ? reduce.toFixed(2) : reduce;
    x = y;
    arraysum = [];
    arraysum.push(reduce);
}

function reset(){
    arraysum = [];
    calculation.innerText = "";
    passedcalculation.innerText = "";
    enable();
}

function deci(){
    calculation.innerText += ".";
}

function del(){
    let ahrr = calculation.innerText;
    ahrr = ahrr.slice(0, ahrr.length -1);
    calculation.innerText = ahrr;
}

function divizero(){
    const dzero = document.getElementById("0").disabled = true;
    const done = document.getElementById("1").disabled = true;
    const dtwo = document.getElementById("2").disabled = true;
    const dthree = document.getElementById("3").disabled = true;
    const dfour = document.getElementById("4").disabled = true;
    const dfive = document.getElementById("5").disabled = true;
    const dsix = document.getElementById("6").disabled = true;
    const dseven = document.getElementById("7").disabled = true;
    const deight = document.getElementById("8").disabled = true;
    const dnine = document.getElementById("9").disabled = true;
    const ddivide = document.getElementById("divide").disabled = true;
    const dmultiply = document.getElementById("multiply").disabled = true;
    const dminus = document.getElementById("-").disabled = true;
    const dplus = document.getElementById("+").disabled = true;
    const dequals = document.getElementById("=").disabled = true;
    const ddecimal = document.getElementById(".").disabled = true;
    const ddelet = document.getElementById("delete").disabled = true;
    return passedcalculation.innerText = "You can't divide by 0. \n Press the clear button."
}

function enable(){
    const dzero = document.getElementById("0").disabled = false;
    const done = document.getElementById("1").disabled = false;
    const dtwo = document.getElementById("2").disabled = false;
    const dthree = document.getElementById("3").disabled = false;
    const dfour = document.getElementById("4").disabled = false;
    const dfive = document.getElementById("5").disabled = false;
    const dsix = document.getElementById("6").disabled = false;
    const dseven = document.getElementById("7").disabled = false;
    const deight = document.getElementById("8").disabled = false;
    const dnine = document.getElementById("9").disabled = false;
    const ddivide = document.getElementById("divide").disabled = false;
    const dmultiply = document.getElementById("multiply").disabled = false;
    const dminus = document.getElementById("-").disabled = false;
    const dplus = document.getElementById("+").disabled = false;
    const dequals = document.getElementById("=").disabled = false;
    const ddecimal = document.getElementById(".").disabled = false;
    const ddelet = document.getElementById("delete").disabled = false;
}