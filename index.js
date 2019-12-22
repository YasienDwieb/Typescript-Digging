"use strict";
var myName = "My name is here";
console.log('name: ', myName);
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var p1 = {
    name: "ahmed",
    age: 20,
    gender: Gender.male,
    custom: { favclub: "He loves volleyball" },
    favoriteColor: Colors.Green
};
console.log('Person object: ', p1);
