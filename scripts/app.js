

let batter = {
    currentSwing: null
};

let swingArray = ["hit", "strike"];


function getSwing() {
  const randomSwing = Math.floor(Math.random() * swingArray.length); 
  batter.currentSwing = swingArray[randomSwing]; 
}

console.log("get swing func work: ",getSwing(), "current swing: ", batter.currentSwing);

