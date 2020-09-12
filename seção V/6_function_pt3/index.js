const person1 = {
    name: 'Fulano',
    sayName () {
        return `The name is ${this.name}`
    }
}

const person2 = {
    name: 'Beltrano'
}

console.log(person1.sayName.call(person2))

