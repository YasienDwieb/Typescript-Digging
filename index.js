"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = require("./src/Enums");
var PersonClass_1 = __importDefault(require("./src/PersonClass"));
var myName = "My name is here";
console.log('name: ', myName);
var p1 = {
    name: "ahmed",
    age: 20,
    gender: Enums_1.Gender.male,
    custom: { favclub: "He loves Liv" },
    favoriteColor: Enums_1.Color.Green
};
console.log('Person object: ', p1);
var p2 = new PersonClass_1.default("Omar", 23, Enums_1.Gender.male, Enums_1.Color.Blue, { favclub: "He loves Juve" });
p2.info();
p2.speak('Great quotes');
