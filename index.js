// Random Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Change Img with Random Number
document.querySelector(".img1").setAttribute(["src"] , "./images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute(["src"] , "./images/dice" + randomNumber2 + ".png")
// Change H1 Title Winner
if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber1 === randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}else{
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚩";
}