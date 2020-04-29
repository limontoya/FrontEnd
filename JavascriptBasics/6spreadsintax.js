//Prints sentences
let print_sentence = ( word1, word2, word3 ) => {
  
  let sentence = []

  sentence.push(word1)
  sentence.push(word2)
  sentence.push(word3)

  return sentence.join(' ')
}

let arr = ['test', 'two', 'three', 'four']

print_sentence(...arr)

//returns num value
let a = (param1, param2, param3, param4) => {
  console.log(param1)
  console.log(param2)
  console.log(param3)
  console.log(param4)

  return ( param1 * param2 ) + (param3 / param4)
}

let arr = [3,6,9,12]

//spread sintax
a(...arr)

//Ignores other params if the function called is not receiving all

//a([3,6,9])


//Operations can be done inside {}
//let fn = (value) => { return value*2 }

//fn(5)

//No need function sintaxis 
//(() => { return 6 })()

//Can be returned and called in same line
//(function fn(){ return 8 })()

/* Needs a return statment
function fn () {
  return 4
}
fn ()
*/
/* Function setted on a variable
let fn = function () {
}
// fn
*/
