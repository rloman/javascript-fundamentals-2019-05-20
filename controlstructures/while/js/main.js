"use strict"

function demo() {


    let count = 0;

    while (count < 10) {
        console.log("Count is now: " + count);
        count++;
    }


    // do while

    console.log("Einde while, begin do ... while");

    count = 100;
    do {
        console.log("Count is now: " + count);
        count++;
    }
    while (count < 10);

    // for loop


    let routeGevonden = false;

    for (let teller = 0; teller < 50; teller++) {
        if (teller == 25) {
            continue; // spring naar de regel met de check (teller++, teller < 50) )
        }

        if (teller == 40) {
            routeGevonden = true;
            break;
        }
        console.log("De teller in de for loop is: " + teller);
    }

    console.log("Route gevonden: " + routeGevonden);


    for(;;) {
        console.log("Forever ... ");
    }

    // while(true) {

    // }
}