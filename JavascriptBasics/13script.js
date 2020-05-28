//document keyword
//Write directly 
document.write(document.styleSheets) //object StyleSheetList
document.write(document.styleSheets[0]) //object CSSStyleSheet
document.write(document.styleSheets.length) //=1
//Powerful method
console.log(document.getElementsByTagName('h1')) //HTMLCollection { 0: HTMLHeadingElement {} }
console.log(document.getElementsByTagName('h1')[0]) //HTMLHeadingElement {}
console.log(document.getElementsByTagName('h1')[0].style.color) //nothing returned, it is defined in the style styleSheet
document.getElementsByTagName('h1')[0].style.color = 'purple' //direct referenced
document.getElementsByTagName('h1')[0].textContent = 'Bytes!'

console.log(document) //HTMLDocument { location: [Getter/Setter] }

console.log(document.location)

console.log(document.location.reload())

document.write('bye')