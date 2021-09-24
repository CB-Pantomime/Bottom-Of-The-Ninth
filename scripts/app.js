
// ***ALL THOSE VARIABLES*** 
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;

// Do no delete - for future stretch
// let buntOnBase = 0; 
// let buntOut = 0;

// ***FUNCTIONS***
// TESTED OK
function startGame(){
  document.getElementById("swingButton").style.display = "block";
  document.getElementById("swingButton").innerHTML = "SWING!";
  setTimeout(showWindUp, 1000), 
  setTimeout(showPitch, 3200)
  // console.log("start game button works");
}

// TESTED OK
function endOfGameParade(winString){
  let parade = document.getElementById("currentAction");
  parade.innerHTML = winString;
}

// TESTED OK
// batter object hold key-value for currentSwing null to be evaluated throughout game play
let batter = {
  currentSwing: null
};

// TESTED OK
// Array for pitch outcome values to be randomized throughout game play
// One buntOnBase value in conditional to equal a hit/on base, One buntOut value in conditional to equal an out. 
// Five sets of ~"hit", "strike", "foul", "ball"~ values in array to decrease opportunity for either bunt value. 
let swingArray = ["hit", "strike", "foul", "ball", "hit", "strike", "buntOnBase", "foul", "ball", "hit", "strike", "foul", "ball", "hit", "strike", "foul", "ball", "buntOut", "hit", "strike", "foul", "ball"];

// TESTED OK
// function to run get random swing result from swingArray 
function getSwing() {
  const randomSwing = Math.floor(Math.random() * swingArray.length); 
  batter.currentSwing = swingArray[randomSwing]; 
}


// To display string for pitcher winding up
function showWindUp(){
  document.getElementById("currentAction").innerHTML = "The wind up...";
  // clearInterval(); 
}
// To display string for ball headed toward batter 
function showPitch(){  
  document.getElementById("currentAction").innerHTML = "Here comes the pitch!";
}
// To group wind up and pitch to be called in conditionals as relevant w/ increased timeout 
function windAndPitchScript(){
  setTimeout(showWindUp, 4000), 
  setTimeout(showPitch, 6200)

}

// To display string of current game action/result as relevant, called in conditionals
function currentAction(myString){
  let someAction = document.getElementById("currentAction");
  someAction.innerHTML = myString;
}
// To display that the game has ended, called in conditionals as relevant
function gameOver(){
  document.getElementById("currentAction").innerHTML = "GAME OVER THX 4 PLAYING"
}
// To turn off swing button at end of game play 
function turnOffSwing(){
  let turnOffSwing = document.getElementById("swingButton");
  turnOffSwing.style.display = "none"; 
}


// TESTED OK
// CLICK SWING RUNS GAMEPLAY 
function gamePlay(){

    // Get random swing 
    getSwing();

    // Nested comparison statements to evaluate current game result
    if(batter.currentSwing === "hit"){

                    // TESTED OK                                              
            hitsTotal = hitsTotal + 1; 
            if(hitsTotal === 4){    
                // To display end of game result
                endOfGameParade(`That's four hits to score the winning run! The 🌃 goes 🐻 over today's 🏆! Home team wins! U R 👍 🎆 4 🐭-ing them to ⭐-dom`);            
                turnOffSwing();
            }else{ 
                // To display current game result AND new batter up 
                setTimeout( currentAction(`It's a hit! 👏 Batter now on base and a new batter is up!`), 3000);
                // To display another wind up / pitch 
                windAndPitchScript();                         
            }


    }else if(batter.currentSwing === "strike"){
         
                    // TESTED OK
            strikesTotal = strikesTotal + 1;
            if(strikesTotal === 9){
                // To display end of game result
                endOfGameParade(`Three strike outs! ⚡⚾⚡ Pitching team wins! ⚡🎱⚡ Game over, thx 4 playing!`);
                // To remove swing button at end of game
                turnOffSwing();
            }else if(strikesTotal === 3 || strikesTotal === 6){
                // To display current game result and new batter up 
                setTimeout(currentAction(`You've struck out!💩 ... Next batter is up!`), 3000);
                // To display another wind up / pitch
                windAndPitchScript();                  
            }else{
                // To dislpay current game result
                setTimeout( currentAction(`Strike!`), 3000 );
                // To dislpay another wind up / pitch
                windAndPitchScript();
            }
        
        
    }else if(batter.currentSwing === "foul"){

                    // TESTED OK
            foulsTotal = foulsTotal + 1;
            if(foulsTotal <= 2){
                strikesTotal = strikesTotal + 1;
                // To display current game result 
                setTimeout(currentAction(`Foul ball! 🐔 Add strike.`), 3000);
                // To display another wind up / pitch
                windAndPitchScript();
            }else{
                // To display current game result
                setTimeout( currentAction(`Wow! You keep chipping out these foul balls! 😂`, 3000 ) );
                // To display another wind up / pitch
                windAndPitchScript();
            }
       

    }else if(batter.currentSwing === "ball"){

                    // TESTED OK
            ballsTotal = ballsTotal + 1;
            if(ballsTotal === 4 || ballsTotal === 8 || ballsTotal === 12){
            hitsTotal = hitsTotal + 1;

                if(hitsTotal === 4){
                    // To display end of game result
                    endOfGameParade(`Walk pushes a run in! The 🌃 goes 🐻 over today's 🏆! Home team wins! U R 👍 🎆 4 🐭-ing them to ⭐-dom!`);
                    // Remove swing button at end of game
                    turnOffSwing();
                }else{
                    // To display current game result and new batter up 
                    setTimeout( currentAction(`Ball 4! 🐌 Batter takes base. New batter up!`), 3000 );
                    // To display another wind up / pitch
                    windAndPitchScript();
                }

            }else{
            // To display current game result
            setTimeout( currentAction(`Ball!`), 3000 );
            // To display another wind up / pitch
            windAndPitchScript();
            }
        
    }else if(batter.currentSwing === "buntOnBase"){


            hitsTotal = hitsTotal + 1;
            if(hitsTotal === 4){    
            // To display end of game result
            endOfGameParade(`A run is bunted in to win the game! The 🌃 goes 🐻 over today's 🏆! Home team wins! U R 👍 🎆 4 🐭 them to ⭐-dom!`);            
            turnOffSwing();
            }else{ 
            // To display current game result AND new batter up 
            setTimeout( currentAction(`👏 Nice, a bunt to get on base! And they say it's gone the way of T-Rex... New batter is up!`), 3000);
            // To display another wind up / pitch 
            windAndPitchScript();                         
            }

    }else if(batter.currentSwing === "buntOut"){


            strikesTotal = strikesTotal + 3;
            if(strikesTotal === 9){
            // To display end of game result
            endOfGameParade(`Thrown out at first off a bunt! That's three outs... ⚡⚾⚡ Pitching team wins! ⚡🎱⚡ Game over, thx 4 playing!`);
            // To remove swing button at end of game
            turnOffSwing();
            }else if(strikesTotal < 9){
            // To display current game result AND new batter up
            setTimeout( currentAction(`Thrown out at first off a bunt! ... New batter is up!`) );
            // To display another wind up / pitch
            windAndPitchScript();
            }

    }
    
};





// ************ scratch do not delete - for future stretch 
// array of 9 batters. use that array of batters to randomly select first batter. 
// *while outs or less than three and score is tied*

// conditional while true, increment the indice from array. 

// let begin, middle, end; 

// let battersArray = ["Sandra", "Amari", "Dannis", "Kevin"];
// let currentBatter = ""; 

// function getBatter(){

//   let randomBatter = Math.floor( Math.random() * battersArray.length );
//       currentBatter = randomBatter[battersArray];

//   }

// } 

// for(let i = 0; i > battersArray.length; i++){

// }
// ************
