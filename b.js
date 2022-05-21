let barButton=document.querySelector('.bars');
let headerUl=document.querySelector('header ul');
let closebar=document.querySelector(".closebar");

barButton.onclick=()=>{
    headerUl.style.left="0";
    closebar.style.display="block";
    barButton.style.display="none";
}

closebar.onclick=()=>{
    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";
}

let firstpage=document.querySelector("section.welcome");
let secondpage=document.querySelector(".seecard");

firstpage.onclick=()=>{
    firstpage.style.display="none";
    secondpage.style.display="block";
}
/*
secondpage.onclick=()=>{
    firstpage.style.display="none";
    secondpage.style.display="block";
}
*/


function load(){
    setInterval(rotate,3000); 
             }

function rotate(){
    document.getElementById("loader").style.display="none";
    document.querySelector("section.welcome").style.display="block";

//setInterval(rotate,5000);
}


var i=0;
var txt="Product Designer,Website $ Mobile App developer";
var text=document.getElementById("about");

function type(){
if(i<txt.length){
text.innerHTML+=txt.charAt(i); i++;
}
setInterval(type,1000);     
}
type();

