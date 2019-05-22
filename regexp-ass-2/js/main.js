"use strict"


demo();

function demo() {

    let input = "A.jpgB.jpgC.jpg";

    let output = input.replace(/jpg/g, "jpg, ").replace(/,\s$/, "");

    console.log(output);

    let files = output.split(", ");


    // print some
    for(let file of files) {
        console.log(file);

        // to show the name of the file without the .jpg extention

        let fileName = file.split(".jpg")[0];
        console.log(">"+fileName+"<");

    }

    // if you want to make a sentence of it :-)

    let sentence = "We have the file: "+files.join(" and we have the file ");

    console.log(sentence);


}