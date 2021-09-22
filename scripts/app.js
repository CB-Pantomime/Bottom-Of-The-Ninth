
// ***ALL THOSE VARIABLES*** 
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;


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
// array for hit or strike values to be randomized throughout game play
let swingArray = ["hit", "strike", "foul", "ball"];

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

function turnOffSwing(){
  let turnOffSwing = document.getElementById("swingButton");
  turnOffSwing.style.display = "none"; 
}

// freakin' just use this lol fisher-yates is too crazy 4 me rn
// let battersArray = ["CB", "Kev", "Maud", "Jill"];

// let sortedBatters = [];

// sortedBatters = battersArray.sort( (a,b) => 0.5 - Math.random() );
// console.log(sortedBatters);



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
                endOfGameParade(`A run is batted in! Batting team wins! GAME OVER THX 4 PLAYING`);            
                turnOffSwing();
            }else{ 
           
            // To display current game result AND new batter up 
            setTimeout( currentAction(`It's a hit! Hits total: ${hitsTotal} Batter now on base and a new batter is up!`), 3000);
            // To display another wind up / pitch 
            windAndPitchScript();    
               
            // console.log("It's a hit!", "hits total: ", hitsTotal);
                       
            }


    }
    else if(batter.currentSwing === "strike"){
         
                    // TESTED OK
            strikesTotal = strikesTotal + 1;
            if(strikesTotal === 9){
                // setTimeout(currentAction(`Pitching team wins!`), 3000);
                // console.log("Pitching team wins!")
                // console.log("strikes total: ", strikesTotal);
                endOfGameParade(`Three strike outs! Pitching team wins! GAME OVER THX 4 PLAYING`);
                // Remove swing button 
                turnOffSwing();
            }else if(strikesTotal === 3 || strikesTotal === 6){

              // To display current game result AND new batter up 
              setTimeout(currentAction(`You've struck out! Next batter is up.`), 3000);
              // To display another wind up / pitch
              windAndPitchScript();                  
            }else{
            setTimeout( currentAction(`Strike!`), 3000 );
              windAndPitchScript();
            }
        
        
    }
    else if(batter.currentSwing === "foul"){

                    // TESTED OK
            foulsTotal = foulsTotal + 1;
            if(foulsTotal <= 2){
                strikesTotal = strikesTotal + 1;
                // To display current game result 
                setTimeout(currentAction(`Foul ball! Add strike. Fouls total: ${foulsTotal}. Strikes total: ${strikesTotal}`), 3000);
                // To display another wind up / pitch
                windAndPitchScript();
            }else{
              setTimeout( currentAction(`WOW U KEEP FOULING OUT lol. Fouls total: ${foulsTotal}`), 3000 );
                // To display another wind up / pitch
                windAndPitchScript();
            }
       

    }
    else if(batter.currentSwing === "ball"){

                    // TESTED OK
        ballsTotal = ballsTotal + 1;
        if(ballsTotal === 4 || ballsTotal === 8 || ballsTotal === 12){
            hitsTotal = hitsTotal + 1;

                if(hitsTotal === 4){
                    // setTimeout( currentAction(`Batting team wins!`), 3000 );           
                    // console.log("Batting team wins");
                    // console.log("hits total: ", hitsTotal);
                    // console.log("this ball thing on? ");
                    endOfGameParade(`Walk pushes a run in! Batting team wins! GAME OVER THX 4 PLAYING`);
                    // Remove swing button 
                    turnOffSwing();
                }else{
                    // To display current game result AND new batter up 
                    setTimeout( currentAction(`Ball 4! Batter takes base. New batter up! Ball total: ${ballsTotal}`), 3000 );
                    // To display another wind up / pitch
                    windAndPitchScript();
                }
        }else{
        setTimeout( currentAction(`Ball! Ball total: ${ballsTotal}`), 3000 );
        // To display another wind up / pitch
        windAndPitchScript();
        }
        
    }
    
};
