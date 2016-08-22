"use strict";

function movie() {
    let film = "marvel";
    return film;
}

let movie2 = (r) => {
    const pi = 3.14;
    let x = pi.width();
};

let movie3 = r => 3.14 * r * r;

console.log(movie);

let name = 'bucky';

console.log ('ss ' + name + 'sd');

let b = 7;
console.log (`ssd ${name} sd
    asd sdsda as`);


    // SPread operator

function addNumbers(a ,b, b) {
    console.log(a + b + c);
}

var nums = [3, 4, 5];
addNumbers(num[0], nums[1], nums[2]);
addNumbers(...nums);

var lemeats = ['bac', 'ssam'];
var food = ['app', ...lemeats, 'kiwi'];
console.log();

// Classes

class Person {

    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(this.weight);
    }

}

let joko = new Person('joko', 21, 89);
joko.displayWeight();

class Enemy extends Person {

    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(this.language);
    }

}

let bucky = new Enemy('bucky', '11', '123', 'js');
