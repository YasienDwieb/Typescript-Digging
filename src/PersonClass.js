"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, gender, favoriteColor, custom) {
        var _this = this;
        this.speak = function (quote) {
            if (quote)
                console.log("I am saying " + quote);
            else
                console.log("I am saying Bla Bla Bla ...");
        };
        this.info = function () {
            console.log(_this);
        };
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.favoriteColor = favoriteColor;
        this.custom = custom;
    }
    return Person;
}());
exports.default = Person;
