"use strict"


demo();


function demo() {


    try {
        console.log(divide(4, 0));
    }
    catch (e) {
        console.log("Delen door null is flauwekul! :" + e);
    }

    console.log("Einde programma");

}

function divide(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        throw new Error();
    }
}

