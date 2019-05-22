"use strict"


function demo() {

    let age = 50;

    if (age >= 40) { // then => 
        console.log("U bent senior!!!");
    }
    else {
        if (age < 30) {
            console.log("U bent junior!!!");
        }
        else {
            console.log("genoeg ... ")
        }
    }

    // ternairy operator
    let label = (age > 40) ? "Senior" : "Junior";

    // ander voorbeeld

    let male = true; // mannetje

    console.log(!male);

    if (male) {

    }

    if (male == true) {

    }

    age = 60;
    if (age != 60) {

    }

    let name = "Ray";

    if (name != "John") {

    }


}


