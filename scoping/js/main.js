// use this to write
// code that is strict, which in this
// case means to prevent error later on
"use strict";

function demo() {
    var a = 5;

    let b = 6;
    let b = 67; // gives a runtime error!!!
    // since b is already declared

    {
        let b = 15;
        alert(b);
    }

    {
        alert(b);
    }
}