"use strict";

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20; // starting score
let highscore = 0;


const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}



document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    
    // when there is no input
    if(!guess){
        displayMessage("Please Enter a Number");
        // document.querySelector(".message").textContent = "Please Enter a Number."
    }
    
    // when guess is correct
    else if(guess === secretNumber){
        displayMessage("🎉Correct Number");
        // document.querySelector(".message").textContent = "🎉Correct Number"
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "rgb(50,200,50)";
        document.querySelector(".number").style.width = "30rem";

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? "📈Too high" : "📉Too low");
            // document.querySelector(".message").textContent = guess > secretNumber ? "📈Too high" : "📉Too low";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lost the game"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
    // when guess is less 
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector(".message").textContent = "📉Too low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You loss the game"
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor = "red";
    //     }
    // }
    // // when guess is grater
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector(".message").textContent = "📈Too high";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You loss the game";
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor = "red";
    //     }
    // }
});


// again method
document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".nymber").style.width = "15rem";
});