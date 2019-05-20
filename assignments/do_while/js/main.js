"use strict"

function demo() {

    let number = 0;  // in fact an invalid number
    while (number < 1 || number > 10) {
        alert("Enter a valid number between 1 and 10");

        do {
            number = window.prompt("Enter a value");
        }
        while (isNaN(number));
        /*
        if(number <1 || number > 10) {
            alert("Enter a valid number between 1 and 10");
        }
        */
    }

    console.log(number);

    number = 0;

}

