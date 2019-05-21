"use strict"


demo();


function demo() {

    let people = new Array(5);

    people[0] = "Piet";
    people[1] = "Jan";
    people[2] = "Frans";

    // fetch one element
    console.log(people[0]);

    people[7] = "Willem";
    console.log(people[7]);

    // loop over them (basic)
    for (let i = 0; i < people.length; i++) {
        console.log(i + 1 + ") Using the basic for loop: " + people[i]);
    }

    // loop over them (enhanced for  /// for each ...)
    for (let person of people) {
        console.log("Using the for each loop:" + person);
    }

    people = ["A", "B", "C"];

    for (let element of people) {
        console.log(element);
    }



    // function to print tables
    let allTables = tables();

     // now print the tables
     for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 20; j++) {
            console.log(i+"x"+j+"="+allTables[i][j]);
        }
    }

    // andere manier :-)

    people.forEach(prettyPrint);


    // there are also high order functions which
    // are very handy but for later??

    let numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    // print all squares of the odds numbers of this numbers people
    numbers
        .filter(n => n % 2 == 1)
        .map(n => n ** 2)
        .forEach(prettyPrint);
}

function tables() {
    // first full the tables
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = [];
        for (var j = 0; j < 20; j++) {
            arr[i][j] = i * j;
        }
    }

    return arr;
}

function prettyPrint(element) {
    console.log("Pretty print:" + element);
}