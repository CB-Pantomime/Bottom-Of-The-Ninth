
// batter object hold key value currentSwing null to be evaluated throughout game play
let batter = {
    currentSwing: null
};
// starter pack basic array for hit or strike to be randomized throughout game play
let swingArray = ["hit", "strike"];

// function to run get random swing 
function getSwing() {
  const randomSwing = Math.floor(Math.random() * swingArray.length); 
  batter.currentSwing = swingArray[randomSwing]; 
}

// testing zone 
// console.log(getSwing(), batter.currentSwing);

function gamePlay(){

    getSwing();

    if(batter.currentSwing === "hit"){
        console.log("It's a hit!");


    }else{
        console.log("Strike!");
    }

}

gamePlay();


