"use strict"


function formSubmit() { // returns a boolean

    let messages ="";

    let inputFirstName = document.getElementById("firstName");
    if(inputFirstName.value.trim() == "") {
       messages += "Please supply a value for firstName";
       inputFirstName.focus(); // to set focus to inputFirstName
    }

    if(document.getElementById("email").value.trim() == "") {
        messages += "\nPlease supply a value for email";
    }

    // finally

    if(messages != "") {
        alert(messages);

        return false;
    }
    else {
        return true;
    }
}
