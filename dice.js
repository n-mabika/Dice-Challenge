/* First image source, accessing it through the DOM */

var randomNumber1 = Math.floor(Math.random()*6 ) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

/* Second Dice image source - shorter and concise */

var randomNumber2 = Math.floor(Math.random()*6 ) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/* Changing the titles to display the winner or a draw */


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins";
} else if  (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 Wins";
 } else {
    document.querySelector("h1").innerHTML = "Draw";
 } 



 
 