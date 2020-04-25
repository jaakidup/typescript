

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
    greet(name: string): any
}

let jaaki: Person = {
    name: "Jaaki",
    greet: (name: string) => name
}

let joe: Person = {
    name: "Joe",
    greet: (name: string) => name
}






// this is one way of calling the generic function.
let firstResult = identity(jaaki)
console.log(firstResult.greet("joe"))
// this is the second way of calling a generic function with type info explicitly used
let secondResult = identity<Person>(joe)
console.log(secondResult.greet("Jaaki"))



let ids = identities([jaaki, joe])
ids.forEach((person) => {
    console.log(person.greet(person.name))
})
console.log(ids)



