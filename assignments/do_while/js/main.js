"use strict"

let rapportCijfer = readMark();

console.log("Mijn rapportcijfer is: " + rapportCijfer);

// this function reads AND RETURNS a valid mark (rapportcijfer)
function readMark() {

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

    return number;
}

