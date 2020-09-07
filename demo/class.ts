class Animal {
    public name: string; // protected,private
    readonly age: number;
    static isAnimal(ins){
        return ins instanceof Animal
    }
    constructor(name: string, age?: number){
        this.name = name
        this.age = age
    }
    run() {
        return `${this.name} is running`
    }
}

const dog = new Animal('dog', 2)
console.log(Animal.isAnimal(dog))

class Dog extends Animal {
    bark(){
        return `${this.name} is barking `
    }
}
const dog1 = new Dog('cat')

class Cat extends Animal{
    constructor(name) {
        super(name)
    }
    run(){
        return `Mi, ${super.run()}`
    }
}
const cat = new Cat('cat')