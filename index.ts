import { Color, Gender } from './src/Enums';
import { Person as PersonInterface } from "./src/PersonInterface";
import Person from './src/PersonClass';

const myName: string = "My name is here"
console.log('name: ', myName)

const p1: PersonInterface = {
    name: "ahmed",
    age: 20,
    gender: Gender.male,
    custom: { favclub: "He loves Liv" },
    favoriteColor: Color.Green
}

console.log('Person object: ', p1)

const p2 = new Person( "Omar", 23, Gender.male, Color.Blue, { favclub: "He loves Juve" }, )

p2.info()
p2.speak('Great quotes')