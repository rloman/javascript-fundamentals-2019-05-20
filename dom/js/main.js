"use strict"


function demo() {
    console.log(window.document.data.address.value);
    console.log(document.getElementById("addressId").value);
    console.log(document.forms[1].address.value);
}

function yellow() {
    let divList = document.getElementsByTagName("div");
    for(let divje of divList) {
        divje.style.backgroundColor="yellow";
        divje.style.fontWeight="bold";
    }
}

