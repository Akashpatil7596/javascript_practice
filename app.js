'use strict';

//Operators


//Arithmetic Operator
const currentYear = 2021
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2000;
console.log(ageJonas, ageSarah);

const firstName = 'Marcus';
const lastName = 'Aurelius'
console.log(`${firstName} ${lastName}`);

//Assignment Operator
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

//Comparison Operator
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah != 18);

// Arrays


// const cars1 = ["Volvo", "BMW", "Toyota","Suzuki"];
// const cars2 = ["Hyundai", "Honda", "RangeRover"]
// const allCars = cars1.concat(cars2)
// const cars = allCars.sort();
// console.log(typeof cars)
// for(let i=0;i<=cars.length;i++){
//     console.log(cars[i])
// };
// console.log(cars);
// cars[0] = "Apple";
// console.log(cars);

// Push Object Into Array


// const details = {firstname: "Akash",age: 26};
// const details1 = {firstname: "Akasash",age: 6};

// const det = [];
// det.push(details,details1)
// console.log(det);


// const fruits = ["Apple","Banana","Chiku","😊"];
// fruits[0] = "Lemon";
// console.log(fruits);

// const numbers =[96, 12, 192, 48];
// const numbersInAsc = numbers.sort((a, b) => a-b);
// document.write(numbersInAsc);

// document.querySelector('.btn').addEventListener('click', function displayDate() {
//     document.querySelector('.date').textContent = `${Date()}, Have A Great Day.`;
// });

// function switchOn(){
//     document.querySelector('.bulb').src = "https://www.w3schools.com/js/pic_bulbon.gif";
// }

// const createChild = document.createElement('div');
// const addChild = createChild.textContent = "I'm A FrontEnd Developer";

// const parent = document.getElementById('parent').appendChild(createChild);
// console.log(parent);

// class Cars{
//     constructor(name, year){
//         this.name = name;
//         this.color = year;
//     }

// age() {
//     let date = new Date();
//     return date.getFullYear - this.year;
//     }   
// }
// let myCar = new Cars("ford", 2014);
// document.write(myCar.name +' is '+ myCar.age() + 'Years old');



// var starwars = require('starwars');
 
// console.log(starwars()); // "No. I am your Father."
// console.log(starwars()); // "Great shot kid, that was one in a million."
// console.log(starwars.quotes); // ["No. I am your Father.", "Great shot kid, that was one in a million.",...]

// Coding Challange 1

// const marksBMI = 78 / 1.69 ** 2;
// const johnsBMI = 92 / 1.95 ** 2;

//     const markHigherBMI = marksBMI > johnsBMI;

// console.log(markHigherBMI);