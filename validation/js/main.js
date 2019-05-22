"use strict"


function formSubmit() { // returns a boolean

    let messages = "";


    let elementToFocus;

    let inputFirstName = document.getElementById("firstName");
    if (inputFirstName.value.trim() == "") {
        messages += "Please supply a value for firstName";
        elementToFocus = inputFirstName;
    }

    if (document.getElementById("email").value.trim() == "") {
        messages += "\nPlease supply a value for email";

        if (!elementToFocus) {
            elementToFocus = document.getElementById("email");
        }
    }

    // finally

    if (messages != "") {
        alert(messages);
        elementToFocus.focus();

        return false;
    }
    else {
        return true;
    }
}
