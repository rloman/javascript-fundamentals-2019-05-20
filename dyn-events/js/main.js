"use strict"


function setEventHandlersToDivs() {

    let divList = document.getElementsByTagName("div");
    for (let div of divList) {

        // this line registere the event listener changeColor to the event mouseover on the div
        div.addEventListener("mouseover", changeColor);
    }
}

function changeColor(event) { // here, the event is the event what has happened. In our case a mouse over on the div!!!

    let divWaaropIsGeklikt = event.target;
    divWaaropIsGeklikt.style.color = "red";

}

function setEventHandlersToSpans() {

    let spanList = document.getElementsByTagName("span");
    for(let span of spanList) {
        span.addEventListener("click", function () {
            alert("you clicked a span");
        });
    }
}

