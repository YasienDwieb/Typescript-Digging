import { Person, Gender, Color } from ".";

export class Customer extends Person {

    constructor(name: string, age: number, gender: Gender, favoriteColor?: Color | null, custom?: any) {
        super(name, age, gender, favoriteColor, custom)
    }

    getService = (): void => {
        console.log('I am getting service')
    }
}