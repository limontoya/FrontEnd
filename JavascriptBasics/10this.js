class Box {
  constructor(side){
    this.side = side
  }

  volume(){
    //return this.side * this.side * this.side
    return `The volume is ${ Math.pow(this.side, 3) }.`
  }

  area(){
    return `The area is ${ Math.pow(this.side, 2) }.`
  }
}

let newBox = new Box(5)

newBox.volume()
newBox.area()