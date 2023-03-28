// declarando
class User {};
//instancia de la clase 
const newUser = new User();

class user {
    //method
    greeting() {
        return "Hello";
    }
};

const carlos = new user();
console.log(carlos.greeting());

const pepe = new user();
console.log(pepe.greeting());

// constructor
class user {
    constructor(){
        console.log("New user");
    }
    greeting() {
        return "Hello";
    }
};

const david = new user();
console.log(david.greeting());

// this
class user {
    constructor(name) {
        this.name = name;
    }
    // method
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} soy ${this.name}`;
    }
}

const ana = new user("Anna");
console.log(ana.greeting());

// setters and getters
class user {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak} soy ${this.name}`;
    }

    get uAge () {
        return this.age;
    }
    set uAge (n) {
        this.age = n;
    }
}

const luis = new user("Luis", 43);
console.log(luis.uAge);
console.log(luis.uAge = 20);
