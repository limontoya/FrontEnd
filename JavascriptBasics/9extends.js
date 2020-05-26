//#Heritance
class Animal {
  constructor(name, sound, food){
    this.name  = name
    this.sound = sound
    this.food  = food
  }
}

class Dog extends Animal {
  constructor(name, sound){
    super(name,sound)
  }
}

class Cat extends Animal {
  constructor(name, sound, food){
    super(name,sound,food)
  }
}

let dog = new Dog('Goku', 'woof')

dog.sound //woof

let cat = new Cat('Karin', 'meow', 'tuna')

cat.food //tuna