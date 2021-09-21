// all those variables ... 
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;


// TESTED OK
function addHits(){
    hitsTotal = hitsTotal + 1;
    console.log(hitsTotal);
}
// TESTED OK
function addStrikes(){
    strikesTotal = strikesTotal + 1;
    console.log(strikesTotal);
}

function addFouls(){
    foulsTotal = foulsTotal + 1;
    console.log(foulsTotal);
} 
// TESTED OK
function addBalls(){
    ballsTotal = ballsTotal + 1;
    console.log(ballsTotal);
}
// TESTED OK
function endOfGameParade(){
    console.log("HOORAY LOL");
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
        
        
    }
    
    // else if(batter.currentSwing === "foul"){


    //         addFouls();
    //         if(foulsTotal === ){
                
    //         }
    //     // console.log("Foul!");
    //     // console.log("fouls total: ", foulsTotal);
    // }
    
    else if(batter.currentSwing === "ball"){

                    // TESTED OK
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
