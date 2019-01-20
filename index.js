// When the user clicks on the "Current number of dice button", they should get a dialog box. That dialog box will ask "how many dice do you want to roll?". 

let total = [];

var input=0;

document.getElementById("current-num-dice").addEventListener("click", function(){
input=prompt("how many dice do you want to roll?");
console.log(input);
document.getElementById("dice").innerHTML=input;
});

console.log(input);

document.getElementById("roll-dice").addEventListener("click", function(){
//  When the user clicks Roll Dice!, the values for "Output of your dice roll" and "Total Score" should be filled in. Total Score just means the sum of all the dice.

for(var i =0; i < input; i++) {
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var answer= getRandomInt(1,6);



total.push(answer);
document.getElementById("output").innerHTML=total;
}
s=0;
for(var i=0; i<total.length; i++){

    s += total[i];
    
}
document.getElementById("score").innerHTML=s;

});

document.getElementById("reset").addEventListener("click", 
function (){
document.getElementById("score").innerHTML=0;
  document.getElementById("output").innerHTML=0;
input=0;
total = [];
document.getElementById("dice").innerHTML=0;

});
  


