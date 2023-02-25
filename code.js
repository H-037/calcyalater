const calculation = document.getElementById("calculation");
const passedcalculation = document.getElementById("passedcalculation");

let arraysum = [];
let sum = 0;
function alter(x){
    calculation.innerText += x;
}

let x;
let reduce = 0;
function operator(y){
    sum = Number(calculation.innerText);
    arraysum.push(sum);
    reduce = arraysum.reduce((a, b) => {
        if(arraysum === []){return a};
        if(x === "+"){return a + b};
        if(x === "-"){return a - b};
        if(x === "/"){return a / b};
        if(x === "*"){return a * b};
    });
    passedcalculation.innerText = reduce;
    calculation.innerText = "";
    x = y;
    arraysum = [];
    arraysum.push(reduce);
}

function reset(){
    arraysum = [];
    calculation.innerText = "";
    passedcalculation.innerText = "";
}

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
const equals = document.getElementById("=").addEventListener("click", function(){operator()});
// const decimal = document.getElementById(".").addEventListener("click", reset);
// const delet = document.getElementById("delete").addEventListener("click", reset);
const clear = document.getElementById("clear").addEventListener("click", reset);




//array methode die nicht funktioniert
// function alter(x){
//     calculation.innerText += x;
//     arr[1] = calculation.innerText;
//     console.log(arr[0]);
// }

// function sum(){
//    let sum = arr.reduce((a, b) => a-b, 0);
//    passedcalculation.innerText = sum;
// }


// inner.text methode die nicht funktioniert
// function alter(x){
//    calculation.innerText += x;
// }

// function sum(){
//    let sum = calculation.innerText;
//    passedcalculation.innerText = sum;
// }


//dritte methode wie auf blatt beschrieben
// let i = 3;
// let numbers = [1, 2, 3, 4, 5, 6];
// let operators = ["+", "-", "/", "*"];
// let sumfunc = numbers.reduce((a, b) => {
//         if(i===3){return a+b};
//         if(i<3){return a-b};
//         if(i>3){return a*b};
//     });
// passedcalculation.innerText = sumfunc;
// numbers.push(2);
// console.log(numbers);

// let test = 1 + * + 3;
// console.log(test);


// hat jetzt auch nicht so gut funktioniert
// function alter(x){
//     calculation.innerText += x;
//     console.log(calculation.innerText);
// }

// let sumarray = []
// function op(y){
//     sumarray.push(calculation.innerText, y);
//     calculation.innerText = "";
//     console.log(sumarray);
// }

// function reset(){
//     sumarray = [];
//     passedcalculation.innerText = "";
//     calculation.innerText = "";
// }

// function equal(){
//     sumarray.push(calculation.innerText);
//     let i = 0;
//     let var1 = Number(sumarray[i]);
//     let var2 = Number(sumarray[i+2]);
//     let op = sumarray[i+1];
//     let sum;
//     if(op === "+") {sum =+ var1 + var2;}
//     else if(op === "-") {sum =+ var1 - var2;}
//     else if(op === "/") {sum =+ var1 / var2;}
//     else if(op === "*") {sum =+ var1 * var2;}
//     passedcalculation.innerText = sumarray + " = " + sum;
// }