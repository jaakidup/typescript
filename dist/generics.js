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
var person = {
    name: "Jaaki",
    sample: function (name) {
        console.log("Howdy ", name);
    }
};
// this is one way of calling the generic function.
var firstResult = identity(person);
firstResult.sample("jo");
// this is the second way of calling a generic function with type info explicitly used
var secondResult = identity(person);
secondResult.name = "Joe";
secondResult.sample("Chicka");
