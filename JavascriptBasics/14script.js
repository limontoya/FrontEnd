function handleClick(event){
  //get the event
  console.log(event);//MouseEvent { isTrusted: [Getter] }
  console.log(event.target);//HTMLAnchorElement {}
  console.log(event.target.href);//console.log(event.target);
  alert('Hey, I see you!');
  document.getElementsByTagName('body')[0].style.background = 'pink';
  return false;
}