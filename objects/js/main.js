"use strict"
{
    // create an Object the old(er) way
    let person = new Object();
    person.firstName = "John";
    person.lastName = "Smith";
    person.age = 51;

    console.log(person.firstName);
    console.log("De persoon heeft nu een leeftijd van: "
    +person.age);

    // is hetzelfde als
    console.log("De persoon heeft nu een leeftijd van: "
    +person["age"]);
}

{
    // create and use associate array
    // Why and When? When the name of the
    // property is not a valid id e.g. 2names, 3whatever
    // e.g.
    var person = new Object;
    person["3name"] = "Poedel";
    // person.3name = "J"; // vout

    console.log(person["3name"]);
}





{
    // create an Object the new(er) way
    let person = {}; // identiek aan new Object();
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
    person.age = 45;
    person.hobbies = ["Dansen", "Zingen", "Bier drinken!"];
    person.address = {
        street: "Daltonlaan",
        number: 700,
        zipCode: "8883AA"
    }

    for (let key in person) {
        console.log("The " + key + "'s value is:" + person[key]);
        if(person[key] instanceof Object) {
            let address = person[key];
            for(let key2 in address) {
                console.log(address[key2]);
            }
        }
    }
}