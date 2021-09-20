
let hitsTotal = 0;
let strikesTotal = 0;

function addHits(){
    hitsTotal = hitsTotal + 1;
    console.log(hitsTotal);
}

function addStrikes(){
    strikesTotal = strikesTotal + 1;
    console.log(strikesTotal);
}


// batter object hold key-value for currentSwing null to be evaluated throughout game play
let batter = {
    currentSwing: null
};


// array for hit or strike values to be randomized throughout game play
let swingArray = ["hit", "strike"];


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

    }else{
        // strikesTotal = strikesTotal + 1; 
        addStrikes();
        console.log("Strike!");
        console.log(strikesTotal);
        
    }

}

gamePlay();





