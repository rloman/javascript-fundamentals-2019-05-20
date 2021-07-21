"use strict";

class Garage {



    constructor() {
        this.car = {
            name: "Ray"
        }
    }

    get() {

        return 3;
    }


    b(){
        return () => {
            this.car;
        } 
    }
    c() {
        return this.car;
    }

}

// => 3
let garage = new Garage();
console.log(garage.get());

// => undefined, why? since b is usable for "moving around as a 'first class citizen' "
console.log(garage.b()());

// => Global object
console.log(garage.c());