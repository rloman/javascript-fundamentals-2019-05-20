"use strict"



{
    // create an Object the old(er) way
    var person = new Object;
    person.firstName = "John";
    person.lastName = "Smith";

    console.log(person.firstName);
}

{
    // create and use associate array
    // Why and When? When the name of the
    // property is not a valid id e.g. 2names, 3whatever
    // e.g.

    var person = new Object;
    person["3name"] = "Poedel";

    console.log(person["3name"]);
}





{
    // create an Object the new(er) way
    let person = {};
    person.firstName = "John";
    person.lastName = "Smith";

    console.log(person.firstName);
}

{
    // jsonObject
    let person = {
        firstName: "John",
        lastName: "Smith",
        age: 51
    }

    console.log(person.firstName);
}


// optional
// almost never used it!
{
    //using for in ...
    var person = new Object;
    person.name = "Jane";
    person.address = "Daltonlaan 700";

    for(let key in person) {
        console.log("The "+key+"'s value is:"+person[key]);
    }
}