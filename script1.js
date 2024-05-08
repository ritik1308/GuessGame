const randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let attempts=100;
let fifth=document.getElementsByClassName('h1');
let fif=document.getElementById('body');
let th=document.getElementsByClassName('box');
let t=document.getElementsByClassName('chance');
let hs=document.getElementsByClassName('highscore');
let play=document.getElementsByClassName('play');
function checkGuess(){
    const guess=parseInt(document.getElementById("guess").value);
    console.log(guess);
    attempts--;
    console.log(attempts);
    t[0].innerHTML=`&#128175;Chances : ${attempts}`;

   


    if(guess===randomNumber){
        console.log("Congratulation! Your Guess is Right.")
        fifth[0].innerHTML="Congratulation! Your Guess is Right. &#127881;&#127881;";
        fif.style.backgroundColor="green";
       th[0].innerHTML=guess;
       hs[0].innerHTML=`&#129351;Highscore : ${attempts}`;
    }
    else if(guess<randomNumber){
        console.log("Your guess is Low!")
        fifth[0].innerHTML="Your guess is Low!";
    }
    else {
        console.log("Your guess is High!")
        fifth[0].innerHTML="Your guess is High!";
        fif.style.backgroundColor="blue";
    }
    }
    
play[0].addEventListener('click',()=>{
    t[0].innerHTML="&#128175;Chances : 100";
    hs[0].innerHTML="&#129351;Highscore : 0";
    fif.style.backgroundColor="rgb(70, 69, 69)";
})

    

