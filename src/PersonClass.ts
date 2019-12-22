import { Color, Gender } from './Enums';

class Person {
    name: string
    age: number
    gender: Gender
    favoriteColor?: Color | null
    custom: any
    constructor(name: string, age: number, gender: Gender, favoriteColor?: Color | null, custom?: any) {
        this.name = name
        this.age = age
        this.gender = gender
        this.favoriteColor = favoriteColor
        this.custom = custom
    }

    speak = (quote?: string): void => {
        if (quote)
            console.log(`I am saying ${quote}`)
        else
            console.log(`I am saying Bla Bla Bla ...`)
    }

    info = (): void => {
        console.log(this)
    }
}

export default Person