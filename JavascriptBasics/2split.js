function getThirdWord( ){
    
    let sentence = "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye."
    
    let arr = sentence.split(' ');
    
    let word = arr[2]
    
    console.log(word)
}

getThirdWord( );