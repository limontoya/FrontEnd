function evens(){
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let arr = [];
    let nummap = numbers.map(function(elem) {
        if(elem%2===0){
            arr.push(elem)
        }
    })
    return arr
}

console.log(evens())