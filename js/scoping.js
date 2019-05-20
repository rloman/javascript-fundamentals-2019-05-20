"use strict";

function demo() {
    var a = 5;

    let b = 6;
    let b = 67;

    {
        let b = 15;
        alert(b);
    }

    {
        alert(b);
    }
}

function demo2() {
    let name = "Poedel";
}

function demo3() {
    demo2();
    alert(name);
}