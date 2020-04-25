

// define the generic function
// the type T is passed through to the output
function identity<T>(arg: T) :T {
    return arg
}

// generic function that takes and returns an array of the same type.
function identities<T>(args: Array<T>): Array<T> {
    return args
}

interface Person {
    name: string
    sample(name: string): any
}
let person: Person = {
    name: "Jaaki",
    sample: (name: string) => {
        console.log("Howdy ", name)
    }
}

// this is one way of calling the generic function.
let firstResult = identity(person)
firstResult.sample("jo")
// this is the second way of calling a generic function with type info explicitly used
let secondResult = identity<Person>(person)
secondResult.name = "Joe"
secondResult.sample("Chicka")


