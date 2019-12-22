import { Color, Gender } from '.';

export interface Person {
    name: string,
    age: number,
    gender?: Gender,
    custom: any,
    favoriteColor?: Color
}