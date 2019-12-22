const myName: string = "My name is here"
console.log('name: ', myName)

enum Colors {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

enum Gender {
    male = 'male',
    female = 'female'
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