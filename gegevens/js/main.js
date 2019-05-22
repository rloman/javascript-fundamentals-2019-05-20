"use strict"

demo();

function demo() {

    let name = "Kippenhok";

    console.log(name.toUpperCase());

    var str = "Hello world!";
    var res = str.substring(1, 4);   // lengte is 4-1 = 3;

    console.log(res == "ell");


    let lettertje = str.charAt(0);

    console.log(lettertje == 'H');

    let indexOfWorld = str.indexOf("world");

    console.log(6 == indexOfWorld);


    let salary = parseFloat(8833.3838383.toFixed(2));

    console.log(salary == 8833.38);

    let salaryStringWithTwoDigits = salary.toFixed(2);

    console.log(salaryStringWithTwoDigits == '8833.38')

    let pi = Math.PI;

    let dobbel = Math.ceil( Math.random() * 6);

    console.log(dobbel);


    /// dates

    let date = new Date();

    console.log(date);

    let dayNumber = date.getDay();

    console.log(dayNumber);

    console.log(getDayAsString(dayNumber));


    console.log(date.getFullYear());

    // for later you might use the moment.js library!
    // link: https://momentjs.com/

}

// input: int day (0..6), output string day (Sunday..Saturday)
function getDayAsString(day) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let result = days[day];

    return result;
}