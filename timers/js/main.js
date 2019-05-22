"use strict"


var id = setInterval(doIt, 3000, "aap");

var aantal = 0;

function doIt(message) {
    console.log("Het is nu: "+new Date()+", mooie "+message);


    aantal++;

    if (aantal >= 5) {
        clearInterval(id);
    }
}