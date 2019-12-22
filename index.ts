const myName: string = "My name is here"
console.log('name: ', name)

enum Colors {
    Red,
    Green,
    Blue
}

enum Gender {
    male,
    female
}

interface Person {
    name: string,
    age: number,
    gender?: Gender,
    custom: any,
    favoriteColor?: Colors
}

const p1: Person = {
    name: "ahmed",
    age: 20,
    gender: Gender.male,
    custom: { favclub: "He loves volleyball" },
    favoriteColor: Colors.Green
}

console.log('Person object: ', p1)