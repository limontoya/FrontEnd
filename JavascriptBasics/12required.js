//Uses the files: 12util and 12data
let Util = require('./util') //not neccessary .js at the end of the line
let Data = require('./data')

Util.saySomething('hello from the outside')

Util.saySomething(Data.name)

console.log(Data) //loaded file data.json as an object