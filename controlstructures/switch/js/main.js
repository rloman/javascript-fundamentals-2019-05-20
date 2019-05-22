"use strict"

function demo() {

    let monthNumber = 44;

    let daysOfMonth;

    if (monthNumber == 1) {
        daysOfMonth = 31;
    }
    else {
        if (monthNumber == 2) {
            daysOfMonth = 28; // leap year excluded
        }
        else {
            if (monthNumber == 3) {
                daysOfMonth = 31;
            }
        }
    }

    switch (monthNumber) {

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysOfMonth = 31;
            break;
        // no break => fall through
        case 2:
            daysOfMonth = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysOfMonth = 30;
            break;

        default:
            daysOfMonth = -1;
            break;
    }

    console.log(daysOfMonth);

}


