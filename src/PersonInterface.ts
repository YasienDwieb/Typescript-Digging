import { Color, Gender } from './Enums';

export interface Person {
    name: string,
    age: number,
    gender?: Gender,
    custom: any,
    favoriteColor?: Color
}