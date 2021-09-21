// all those variables ... 
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;



// TESTED OK
function endOfGameParade(){
    console.log("~STADIUM GOES BERSERK HOORAY LOL~");
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

// TESTED OK
// RUNS GAMEPLAY 
function gamePlay(){

    getSwing();

    if(batter.currentSwing === "hit"){

                    // TESTED OK
            hitsTotal = hitsTotal + 1; 
            if(hitsTotal === 4){           
                console.log("Batting team wins");
                console.log("hits total: ", hitsTotal);
                return endOfGameParade();
            }else{            
                console.log("It's a hit!", "hits total: ", hitsTotal);            
            }


    }else if(batter.currentSwing ==="strike"){
         
                    // TESTED OK
            strikesTotal = strikesTotal + 1;
            if(strikesTotal === 9){
                console.log("Pitching team wins!")
                console.log("strikes total: ", strikesTotal);
                return endOfGameParade();
            }else{
            console.log("Strike!", "strikes total: ", strikesTotal);       
            }
        
        
    }else if(batter.currentSwing === "foul"){

                    // TESTED OK
            foulsTotal = foulsTotal + 1;
            if(foulsTotal <= 2){
                strikesTotal = strikesTotal + 1;
                console.log("Foul! Another strike!");
                console.log("fouls total: ", foulsTotal, "strikes total: ", strikesTotal);
            }else{
                console.log("WOW U KEEP FOULING OUT", "fouls total: ", foulsTotal);
            }
       

    }else if(batter.currentSwing === "ball"){

                    // TESTED OK
            ballsTotal = ballsTotal + 1;
            if(ballsTotal === 4){
            hitsTotal = hitsTotal + 1;
                if(hitsTotal === 4){           
                    console.log("Batting team wins");
                    console.log("hits total: ", hitsTotal);
                    return endOfGameParade();
                }else{
                console.log("Ball!", "Ball total: ", ballsTotal);
                }
            }else{
            console.log("Ball!");
            console.log("Ball total: ", ballsTotal);
            }
        
    }
    
};

// ONLY RUNS IT ONCE, BUDDY, UNLESS YR CALLING IT AGAIN W/ THAT FANCY SWING BUTTON!!!!!!
gamePlay();


// for(let i = 0; i < 10; i++){
//     gamePlay();
// }; 
