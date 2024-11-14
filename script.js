const p = document.getElementById('score');
const indic= document.getElementById('indText');
let score = 0;
function updateScore(){
if(indic.innerHTML==="vrai"){
 score += 10;
 indic.innerHTML="";
}
else{ 
 score -= 5;
}
p.innerHTML = score;
}

function submit2(){
  const buttonV = document.querySelector("#reponsev").style;
  const p = document.querySelector("#indText");
  buttonV.backgroundColor="green";
  p.innerHTML="vrai";
  return;
}
function submit1(){
  const buttonf = document.getElementById("reponsef1").style;
  const p = document.querySelector("#indText");
  const tab = document.querySelector(".try_again").style;
  buttonf.backgroundColor="red";
  p.innerHTML="faux";
  tab.zIndex="1";
}

function submit3(){
  const button = document.getElementById("reponsef2").style;
  const p = document.querySelector("#indText");
  const tab = document.querySelector(".try_again").style;
  button.backgroundColor="red";
  p.innerHTML="faux";
  tab.zIndex="1";
}
function submit(){
  let answer = "karim"
  let a = document.querySelector(".a").style;
  let p = document.querySelector("#indText");
  const button = document.querySelector(".submit");
  if(p.innerHTML==="vrai"){
    window.location.href="page2.html";
  }
  else if (p.innerHTML ==="faux"){
    p.innerHTML=`make sure you picked ${answer}` 
  }
  else{
    p.innerHTML="pick one";
  }
  
}
function submitName(){
   let name = document.getElementById('name').value;
   let output = document.getElementById('userName');
   output.innerHTML= name + " score";
}

function tryAgain(){
 let back = document.querySelector(".try_again").style;
 let reponse = document.querySelectorAll(".reponse");
 reponse.forEach(element => {
 element.style.backgroundColor = "white";
});
 back.zIndex="-1";

}
