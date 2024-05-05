class Calculator{
    static PI = 3.14;  
    max_digits = 15;  
    static areaOfCircle(r){
        return Calculator.PI * r * r;
    }
}

var calculator1 = new Calculator();
console.log(`max_digits: ${calculator1.max_digits}`);
console.log(`PI: ${Calculator.PI}`);
console.log(`Area Of Circle: ${Calculator.areaOfCircle(10)}`)

class Animal{
    name = "";
    constructor(_name){
        this.name = _name;
    }
    run(){
        console.log(`${this.name} is running.`)
    }
}

class Dog extends Animal{
   bark(){
    console.log(`${this.name} is barking.`);
   }
}

class Bird extends Animal{
    fly(){
        console.log(`${this.name} is flying.`);
    }
}

const happy = new Dog("Happy");
happy.run();
const phoeTay = new Dog("Phoe Tay");
phoeTay.run();
phoeTay.bark();

const anAnimal = new Animal("An Animal");
anAnimal.run();
// anAnimal.bark();
const aBird = new Bird("A Bird");
aBird.fly();
// aBird.bark();
aBird.run();

class Cat extends Animal{
    color;
    constructor(name, color){
        super(name);
        this.color = color;
    }
    meow() {
        console.log(`${this.name}: Meow.. meow..`)
    }
}

const aCat = new Cat("A Cat", "white");
aCat.meow();

function Greet(){
    console.log("Hello World");
}
Greet();

const greet = ()=>{
    console.log("Hello world");
}
greet();