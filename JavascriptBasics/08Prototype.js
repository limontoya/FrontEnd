//#Prototype

let Animal = function (species, sound){
	this.species = species
	this.sound = sound
}

let Dog = new Animal ('dog', 'bark')

Dog.species

Animal.prototype.food = ''

Dog.food = 'Bones'

Dog.food

//#Object / Function
let Animal = {
	name: 'foo', sound: 'bar'
}

//typeof(Animal) //object

let Animal2 = function(name, sound){
  this.name = 'dog'
  this.sound = 'woof'
}

let Dog = new Animal2('test', 'result')

typeof(Animal2) //function

typeof(Dog) //object

//#Class
class Animal {
  constructor(species, sound){
    this.species = species
    this.sound   = sound
  }
}
/*
let Cat = new Animal()

Cat //Its an Animal but with undefined species and sound
*/
let Cat = new Animal('feline', 'meow')

console.log(Cat)
console.log(Cat.species)
console.log(Cat.sound)

//#Class and functions
class Animal {
  constructor(species, sound, food){
    this.species = species
    this.sound   = sound
    this.food    = food
  }

  speak(){
    return this.sound
  }
}

let Dog = new Animal('canine', 'bark', 'bones')

console.log(Dog)
console.log(Dog.species)
console.log(Dog.sound)
console.log(Dog.food)

console.log( Dog.speak() ) //function =bark

//Prototype:
Dog.bite = function () {
  console.log('bitten')
}

Dog.bite() //extension =bitten