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
