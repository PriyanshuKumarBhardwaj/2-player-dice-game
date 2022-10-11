const firstRandomNumber = Math.floor(Math.random()*6)+1;
const firstDiceImage="./images/dice"+firstRandomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",firstDiceImage);


const secondRandomNumber = Math.floor(Math.random()*6)+1;
const secondDiceImage="./images/dice"+secondRandomNumber+".png";
document.querySelectorAll("img")[1].setAttribute("src",secondDiceImage);

if(firstRandomNumber>secondRandomNumber){
    document.querySelector(".wrapper h1").innerHTML="user 1 is winner";
}
else if(secondRandomNumber>firstRandomNumber){
    document.querySelector(".wrapper h1").innerHTML="user 2 is winner";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="tie";
}