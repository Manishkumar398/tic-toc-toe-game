// RESTART GAME button
var restart =document.querySelector("#b")

//GRAB ALL SQUARE
var squares=document.querySelectorAll("td")
//CLEAR ALL THE SQUARE
function clearboard(){
  for (var i=0;i<squares.length;i++)
  {
    squares[i].textContent="";
  }
}
restart.addEventListener('click',clearboard);

//CHECK THE SQUARE MARKER
// var cellone=document.querySelector("#one")
//
// cellone.addEventListener('click',function(){
//   if (cellone.textContent===''){
//   cellone.textContent='x';
// }
// else if (cellone.textContent==='x'){
//   cellone.textContent='o';
// }
// else {
//   cellone.textContent='';
// }
// })
function changeMarker(){
  if(this.textContent===''){
    this.textContent='x';
  }
  else if (this.textContent==='x'){
    this.textContent='0';
  }
  else{
    this.textContent='';
  }
}
for(var i=0;i<squares.length;i++){
  squares[i].addEventListener('click',changeMarker)
}

//FOR LOOP TO ADD EVENT LISTENER TO ALL THE SQUARES
