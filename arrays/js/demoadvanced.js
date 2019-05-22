// do not use for(let element in array) 
// since in means loop over the properties.
// and that leads to complete different results
// so for now skip this =>

let person = {
    name: "Ray",
    address: {
        street: "'t Veld",
        houseNumber: 10
    },
    getName: function () {
        return 42;
    }
}
console.log(person);
for (let element in person) {
    console.log("Element of Person:" + element);
}
