class Person {
    constructor(name, age){
        this.name=name
        this.age = age
    }

    printName() {
        console.log(this.name)
    }
}

module.exports = Person