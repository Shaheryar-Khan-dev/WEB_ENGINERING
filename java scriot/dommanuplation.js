  h1 = document.getElementById("H1")
  colors =["red","blue","purple"]
  start =0 ;
function changecolor(){
 if (start==3){
    start=0;
 }
  h1.style.color=colors[start]; 
  start = start+1
}
function bgcolor(){
  h1.style.backgroundColor="purple"
}
p1=document.getElementById("P1")
function pgcolor(){
    p1.style.color="blue"
}

function Createpg(){
   newpara =document.createElement("p")
    newpara.innerText="new paragraph"
    document.body.appendChild(newpara)
}