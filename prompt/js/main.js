"use strict"

function demoPostFixPreFix() {

    console.log("Entering method demoPostFixPreFix");


    {
        let age = 50;

        console.log("Postfix increment demo");
        console.log(age++);
        console.log(age);
    }
   

    {
        let age = 50;
        console.log("Prefix increment demo");
        console.log(++age);
        console.log(age);
    }


    {
        console.log("Machtsverheffen");

        console.log(2**3);
    }
    console.log("Leaving method demoPostFixPreFix");
}

function demo() {

    let fruit = window.prompt("What fruit do you like?");
    let age = parseInt(window.prompt("What is your age"));
    console.log("You have chosen: " + fruit);

    let salary = "45000.50";

    let salaryPerMonth = parseFloat(salary) / 12;

    console.log(salaryPerMonth);

    let a = 45; // ok maar te kort

    // let 2a = // vout

    let profession = window.prompt("asdfdf");

    console.log(profession);



    console.log("This year you will reach the age of " + (age + 1));

    foo(null); //slecht


}

function foo(input) {
    console.log(input * 3);
}


