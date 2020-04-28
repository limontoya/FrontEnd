function return_only_10_plus(){
    let iarray = [1, 21, 5, 6, 42, 8, 3, 10, 15]

    let final_array = []
  
    let array = iarray.map(function(elem){
        if(elem>10){
            final_array.push(elem)
        }
    })
    
    return final_array
}

console.log(return_only_10_plus())