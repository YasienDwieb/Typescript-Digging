"use strict";
var myName = "My name is here";
console.log('name: ', name);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var p1 = {
    name: "ahmed",
    age: 20,
    gender: Gender.male,
    custom: { favclub: "He loves volleyball" },
    favoriteColor: Colors.Green
};
console.log('Person object: ', p1);
