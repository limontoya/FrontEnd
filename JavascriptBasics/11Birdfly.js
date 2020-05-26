class Animal {
  constructor(species){
    this.species = species
  }
  fly (){
    return true
  }
}

let Bird = new Animal('parrot')

Bird.fly()