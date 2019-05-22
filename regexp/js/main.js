"use strict"


// might use this for validation

let postcode = "7603EC"; // variable

let re = /[1-9][0-9]{3}\s?[A-Z]{2}/; // reguliere expressie

/* The re has a function test
    which expect a string as parameters and returns a boolean which is
        true: when the validation succeeds
        false: when the valiation fails =>
*/

console.log(re.test(postcode) == true);

postcode ="aap";

console.log(re.test(postcode));

// an other use case .... I want to find myBirthdate from the string

/*
    the re has a method .exec which expects a string

    the exec will return 
        first: the full match
        then everything what is enclosed in parenthesis in ordinal =>
*/

let sentence = "The quick brown is born on 09-08-1968 so is now 50 years old";

re = /(\d{2})-(\d{2})-(\d{4})/;

let [f, day, month, year] = re.exec(sentence);

console.log(day);
console.log(typeof(day));
let myDay = parseInt(day);
console.log(myDay);
console.log(month);
console.log(year);

// construct a date
let myBirthdateAsDateObject = new Date(year, month-1, day); // don't know what the person smoked
// which invented it to have the Range of month in JavaScript from 0 to eleven

console.log(myBirthdateAsDateObject.getDay()); // 0 = Sunday, 5 = Friday, 6 = Saturday

