console.log("hello");

// types in typescript

let age: Number = 45;
let isAdult: boolean = false;
let name: string = "string";

// function
function add(num1: number, num2: number, num3?: number): number {
  return num1 + num2;
}
const sum = add(12, 54);

// array
const array: (string | number)[] = [15, "sagar", "78"];

// object
const userData: { name: string; age: number; address?: string } = {
  name: "sajjan",
  age: 25,
};

// enumerations
enum airline {
  window = "hello",
  aisle = "hi",
  last = "bye",
}

// tuple
let tuple: [string, number] = ["apple", 5];

// example for unknown type
let b: unknown;
b = "hello";

// never and void
function throwError(message: string): never {
  add(12, 23);
  throw new Error(message);
}

// example of class with its access specifiers such as public private and protected
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.greet2();
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  private greet1() {
    console.log(`this is private`);
  }

  protected greet2() {
    console.log(`this is protected`);
  }
}

const student = new Student("sajjan", 26);
student.greet();

class Akash extends Student {
  constructor() {
    super("sajjan", 23);
    this.greet2();
  }

  newGreet() {
    console.log("greetings from akash");
  }
}

const akash = new Akash();
akash.greet();
akash.newGreet();

class Sajjan extends Akash {
  constructor() {
    super();
  }

  greeting() {
    console.log("greetings from sajjan");
  }
}
const sajjan = new Sajjan();
sajjan.greet();
sajjan.newGreet();
sajjan.greeting();

// interfaces in typescript

interface Car {
  color: string;
  engine: number;
  model?: string;
  info: () => void;
}

const bmw: Car = {
  color: "red",
  engine: 123,
  model: "new",
  info: () => {
    console.log("bmw");
  },
};

const audi: Car = {
  color: "blue",
  engine: 222,
  model: "new",
  info: () => {
    console.log("audi");
  },
};

interface electricCar extends Car {
  battery: number;
  range?: number;
}

const ec1: electricCar = {
  color: "red",
  engine: 100,
  battery: 500,
  info: () => {
    console.log("ec1");
  },
};

interface flyingCar extends Car, electricCar {
  wings: number;
  speed: number;
}

const fc: flyingCar = {
  color: "red",
  engine: 100,
  battery: 500,
  info: () => {
    console.log("fc");
  },
  wings: 12,
  speed: 50,
};

// abstract class
abstract class Animal {
  abstract sound(): void;
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const cat = new Cat();
cat.sound();

// polymorphism
class Dog extends Animal {
  sound(): void {
    console.log("Woof");
  }
}

// generics
function getArray<T>(items: T[]): T[] {
  return items;
}

export {};
