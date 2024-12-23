"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
// types in typescript
var age = 45;
var isAdult = false;
var name = "string";
// function
function add(num1, num2, num3) {
    return num1 + num2;
}
var sum = add(12, 54);
// array
var array = [15, "sagar", "78"];
// object
var userData = {
    name: "sajjan",
    age: 25,
};
// enumerations
var airline;
(function (airline) {
    airline["window"] = "hello";
    airline["aisle"] = "hi";
    airline["last"] = "bye";
})(airline || (airline = {}));
// tuple
var tuple = ["apple", 5];
// example for unknown type
var b;
b = "hello";
// never and void
function throwError(message) {
    add(12, 23);
    throw new Error(message);
}
// example of class with its access specifiers such as public private and protected
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.greet2();
    }
    Student.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    Student.prototype.greet1 = function () {
        console.log("this is private");
    };
    Student.prototype.greet2 = function () {
        console.log("this is protected");
    };
    return Student;
}());
var student = new Student("sajjan", 26);
student.greet();
var Akash = /** @class */ (function (_super) {
    __extends(Akash, _super);
    function Akash() {
        var _this = _super.call(this, "sajjan", 23) || this;
        _this.greet2();
        return _this;
    }
    Akash.prototype.newGreet = function () {
        console.log("greetings from akash");
    };
    return Akash;
}(Student));
var akash = new Akash();
akash.greet();
akash.newGreet();
var Sajjan = /** @class */ (function (_super) {
    __extends(Sajjan, _super);
    function Sajjan() {
        return _super.call(this) || this;
    }
    Sajjan.prototype.greeting = function () {
        console.log("greetings from sajjan");
    };
    return Sajjan;
}(Akash));
var sajjan = new Sajjan();
sajjan.greet();
sajjan.newGreet();
sajjan.greeting();
var bmw = {
    color: "red",
    engine: 123,
    model: "new",
    info: function () {
        console.log("bmw");
    },
};
var audi = {
    color: "blue",
    engine: 222,
    model: "new",
    info: function () {
        console.log("audi");
    },
};
var ec1 = {
    color: "red",
    engine: 100,
    battery: 500,
    info: function () {
        console.log("ec1");
    },
};
