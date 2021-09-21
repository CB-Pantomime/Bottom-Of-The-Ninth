// all those variables ... 
let hitsTotal = 3;
let strikesTotal = 8;
let foulsTotal = 2;
let ballsTotal = 3;


// TESTED OK
function addHits(){
    hitsTotal = hitsTotal + 1;
    // console.log("hits total: ", hitsTotal);
}
// TESTED OK
function addStrikes(){
    strikesTotal = strikesTotal + 1;
    console.log("strikes total: ", strikesTotal);
}

function addFouls(){
    foulsTotal = foulsTotal + 1;
    // console.log("fouls total: ", foulsTotal);
} 
// TESTED OK
function addBalls(){
    ballsTotal = ballsTotal + 1;
    // console.log("balls total: ", ballsTotal);
}
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
            addHits();
            if(hitsTotal === 4){           
                console.log("Batting team wins");
                console.log("hits total: ", hitsTotal);
                return endOfGameParade();
            }else{            
            console.log("It's a hit!");
            console.log("hits total: ", hitsTotal);
            }


    }else if(batter.currentSwing ==="strike"){
         
                    // TESTED OK
            addStrikes();
            if(strikesTotal === 9){
                console.log("Pitching team wins!")
                console.log("strikes total: ", strikesTotal);
                return endOfGameParade();
            }else{
            console.log("Strike!");
            console.log("strikes total: ", strikesTotal);       
            }
        
        
    }else if(batter.currentSwing === "foul"){

                    // // TESTED OK
            addFouls();
            if(foulsTotal <= 2){
                addStrikes();
                console.log("Foul! Another strike!");
                console.log("fouls total: ", foulsTotal);
            }else{
                console.log("WOW U KEEP FOULING OUT");
                console.log("fouls total: ", foulsTotal);
            }
       

    }else if(batter.currentSwing === "ball"){

                    // // TESTED OK
        addBalls();
        if(ballsTotal === 4){
            addHits();
                if(hitsTotal === 4){           
                    console.log("Batting team wins");
                    console.log("hits total: ", hitsTotal);
                    return endOfGameParade();
                }else{
                    console.log("Ball!");
                    console.log("Ball total: ", ballsTotal);
                }
        }else{
        console.log("Ball!");
        console.log("Ball total: ", ballsTotal);
        }
        
    }
    
};


gamePlay();


// for(let i = 0; i < 10; i++){
//     gamePlay();
// }; 
