"use strict"

function demo() {

    let produkt = multiply(3, 4);

    console.log(produkt);
}

function multiply(a, b) {
    let result = a * b;

    return result;
}

function geefRapportCijfer() {
    let number = 0;  // in fact an invalid number
    while (number < 1 || number > 10) {
        alert("Enter a valid number between 1 and 10");

        do {
            number = window.prompt("Enter a value");
        }
        while (isNaN(number));
    }

    return number;
}


