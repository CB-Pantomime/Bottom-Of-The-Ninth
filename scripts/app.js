
// all those variables ... 
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;

// To display initial wind up and pitch, to display swingButton
function startGame(){
  document.getElementById("swingButton").innerHTML = "SWING!";
  setTimeout(showWindUp, 1000), 
  setTimeout(showPitch, 3200)
//   console.log("start game button works");
}


// TESTED OK
function endOfGameParade(winString){
  let parade = document.getElementById("currentAction");
  parade.innerHTML = winString;
  // console.log("~STADIUM GOES BERSERK HOORAY LOL~");
}


// TESTED OK
// batter object hold key-value for currentSwing null to be evaluated throughout game play
let batter = {
    currentSwing: null
};

// TESTED OK
// array for hit or strike values to be randomized throughout game play
let swingArray = ["hit", "hit", "strike", "foul", "ball"];

// TESTED OK
// function to run get random swing 
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
// To group wind up and pitch to be called in conditionals as relevant
function windAndPitchScript(){
  setTimeout(showWindUp, 5000), 
  setTimeout(showPitch, 7200)

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


// TESTED OK
// CLICK SWING RUNS GAMEPLAY 
function gamePlay(){

    getSwing();

    if(batter.currentSwing === "hit"){

                    // TESTED OK                                              
            hitsTotal = hitsTotal + 1; 
            if(hitsTotal === 4){           
                // setTimeout(currentAction(`Batting team wins!`), 3000);
                // console.log("Batting team wins");
                // console.log("hits total: ", hitsTotal);  
                setTimeout( endOfGameParade(`Batting team wins!`), 3000  ); 
                return setTimeout( gameOver(), 5000 );
            }else{ 
            // add update current action to "showPitch" ID which needs a name change to encompass maybe "currentAction"
            // To display another wind up / pitch 
            setTimeout( currentAction(`It's a hit! Hits total: ${hitsTotal}`), 3000);
            windAndPitchScript();    
               
            // console.log("It's a hit!", "hits total: ", hitsTotal);
                       
            }


    }else if(batter.currentSwing === "strike"){
         
                    // TESTED OK
            strikesTotal = strikesTotal + 1;
            if(strikesTotal === 9){
                // setTimeout(currentAction(`Pitching team wins!`), 3000);
                // console.log("Pitching team wins!")
                // console.log("strikes total: ", strikesTotal);
                setTimeout( endOfGameParade(`Pitching team wins!`), 3000  );
                return setTimeout( gameOver(), 5000 );
            }else{
            setTimeout(currentAction(`Strike! Strikes total: ${strikesTotal}`), 3000);
            // console.log("Strike!", "strikes total: ", strikesTotal);
              windAndPitchScript();                  
            }
        
        
    }else if(batter.currentSwing === "foul"){

                    // TESTED OK
            foulsTotal = foulsTotal + 1;
            if(foulsTotal <= 2){
                strikesTotal = strikesTotal + 1;
                setTimeout(currentAction(`Foul ball! Add strike. Fouls total: ${foulsTotal}. Strikes total: ${strikesTotal}`), 3000);
                // console.log("Foul! Add strike!", "fouls total: ", foulsTotal);
                windAndPitchScript();
            }else{
              setTimeout( currentAction(`WOW U KEEP FOULING OUT lol. Fouls total: ${foulsTotal}`), 3000 );
              // console.log("WOW U KEEP FOULING OUT", "fouls total: ", foulsTotal);
                windAndPitchScript();
            }
       

    }else if(batter.currentSwing === "ball"){

                    // TESTED OK
        ballsTotal = ballsTotal + 1;
        if(ballsTotal === 4){
            hitsTotal = hitsTotal + 1;
                if(hitsTotal === 4){
                    // setTimeout( currentAction(`Batting team wins!`), 3000 );           
                    // console.log("Batting team wins");
                    // console.log("hits total: ", hitsTotal);
                    setTimeout( endOfGameParade(`Batting team wins!`), 3000  );
                    return setTimeout( gameOver(), 5000 );
                }else{
                    setTimeout( currentAction(`Ball! Ball total: ${ballsTotal}`), 3000 );
                    // console.log("Ball!", "Ball total: ", ballsTotal);
                     windAndPitchScript();
                }
        }else{
        setTimeout( currentAction(`Ball! Ball total: ${ballsTotal}`), 3000 );
        // console.log("Ball!", "Ball total: ", ballsTotal);
        windAndPitchScript();
        }
        
    }
    
};


// gamePlay();


// for(let i = 0; i < 10; i++){
//     gamePlay();
// }; 
