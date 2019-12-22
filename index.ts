// import { Person as PersonInterface } from "./src/PersonInterface";
// import { Color, Gender } from './src';
// import Person from './src/PersonClass';

import {Color, Gender, PersonInterface, Person} from './src'
import { Employee } from './src/Employee'
import { Customer } from './src/Customer'

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

const p2 = new Employee("Omar", 23, Gender.male, Color.Blue, { favclub: "He loves Juve" })
const p3 = new Customer("Omar", 23, Gender.male, Color.Blue, { favclub: "He loves Juve" })

p2.info()
p2.speak('Employee, Great quotes')
p2.work()

p3.info()
p3.speak('Customer, Great quotes')
p3.getService()