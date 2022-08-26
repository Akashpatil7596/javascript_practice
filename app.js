'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can Drive");

// future reserved keywords
// const interface = 'Audio';
// console.log(interface);

//function

function greet(){
    console.log("Hello World");
}setTimeout(greet, 2000);



    function fruitProcessor(apples, oranges){
        console.log(apples, oranges);
        const juice = `let's make a juice with ${apples} Apples And ${oranges} Oranges`;
        return juice;
}


const appleJuice1 = fruitProcessor(5,2);
console.log(appleJuice1);

const appleJuice2 = fruitProcessor(2,3);
console.log(appleJuice2);

