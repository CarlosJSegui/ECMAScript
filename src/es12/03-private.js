class user {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak} soy ${this.name}`;
    }

    get #uAge () {
        return this.age;
    }
    set #uAge (n) {
        this.age = n;
    }
}

const luis = new user("Luis", 43);
console.log(luis.uAge);
console.log(luis.uAge = 20);
