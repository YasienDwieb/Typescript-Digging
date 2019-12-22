import { Person, Gender, Color } from ".";

export class Employee extends Person {

    constructor(name: string, age: number, gender: Gender, favoriteColor?: Color | null, custom?: any) {
        super(name, age, gender, favoriteColor, custom)
    }

    work = (): void => {
        console.log('I am working')
    }
}