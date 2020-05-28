function masker(input){
  let inputarr = input.split('') ;
  
  let wrapped = inputarr.map(function(elem) {
    return '*'
  })

  console.log(wrapped.join(''))
  //console.log(wrapped.join(','));
}
/*
let mask = '*';

function masker(input){

 let wrapped = '';

  for(i=0; i<input.length; i++){
    wrapped += mask;
  }
  console.log(wrapped);
    
}*/

masker( 'Secret' );