"use strict";
// define the generic function
// the type T is passed through to the output
function identity(arg) {
    return arg;
}
// generic function that takes and returns an array of the same type.
function identities(args) {
    return args;
}
var jaaki = {
    name: "Jaaki",
    greet: function (name) { return name; }
};
var joe = {
    name: "Joe",
    greet: function (name) { return name; }
};
// this is one way of calling the generic function.
var firstResult = identity(jaaki);
console.log(firstResult.greet("joe"));
// this is the second way of calling a generic function with type info explicitly used
var secondResult = identity(joe);
console.log(secondResult.greet("Jaaki"));
var ids = identities([jaaki, joe]);
ids.forEach(function (person) {
    console.log(person.greet(person.name));
});
console.log(ids);
