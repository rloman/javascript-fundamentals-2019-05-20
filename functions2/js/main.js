"use strict"

setTimeout(printNames, 500, () => { console.log("Functie via setTimeoutDemo")});

// let teller = 0: // liever niet!

var aantalPersonen = 8;

invoke(function() {

    let teller = 0;
    alert("Jenny en Bas gaan hier aan werken!"+teller+1);
    multiply(teller, 2);
})

function printNames(functie) {

    aantalPersonen++;
    console.log("Mark, Wieb, Muhammed");
}



function invoke(f) {
    f();
}


function multiply(a, b) {
    let result = a * b;

    return result;
}


function demo() {

    let s = multiply(2, 5);
}





function demo2() {
    let r = multiply(3, 2);
}