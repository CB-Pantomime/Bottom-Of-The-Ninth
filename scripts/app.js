
let hitsTotal = 0;
let strikesTotal = 0;
let foulsTotal = 0;
let ballsTotal = 0;

function addHits(){
    hitsTotal = hitsTotal + 1;
    console.log(hitsTotal);
}

function addStrikes(){
    strikesTotal = strikesTotal + 1;
    console.log(strikesTotal);
}

function addFouls(){
    foulsTotal = foulsTotal + 1;
    console.log(foulsTotal);
} 

function addBalls(){
    ballsTotal = ballsTotal + 1;
    console.log(ballsTotal);
}



// batter object hold key-value for currentSwing null to be evaluated throughout game play
let batter = {
    currentSwing: null
};


// array for hit or strike values to be randomized throughout game play
let swingArray = ["hit", "strike", "foul", "ball"];


// function to run get random swing 
function getSwing() {
  const randomSwing = Math.floor(Math.random() * swingArray.length); 
  batter.currentSwing = swingArray[randomSwing]; 
}


// RUNS GAMEPLAY 
function gamePlay(){

    getSwing();

    if(batter.currentSwing === "hit"){
        addHits();
        console.log("It's a hit!");
        console.log(hitsTotal);

    }else if(batter.currentSwing ==="strike"){
        // strikesTotal = strikesTotal + 1; 
        addStrikes();
        console.log("Strike!");
        console.log(strikesTotal);
        
    }else if(batter.currentSwing === "foul"){
        addFouls();
        console.log("Foul!");
        console.log(foulsTotal);
    }else if(batter.currentSwing === "ball"){
        addBalls();
        console.log("Ball!");
        console.log(ballsTotal);
    }

}

// gamePlay();

for(let i = 0; i < 10; i++){
    gamePlay();
};






