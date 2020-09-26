/* ------------------------
Logics
---------------------------
*/

// if statements
//var lightState = "gibberish";
var lightState = "green";

if (lightState == "green")
{
    console.log("Go!");
}
else if (lightState == "red")
{
    console.log("Stop!");
}
else
{
    console.log("Uat?")
}

console.log("end");


// while loops
console.log("Countdown:")
var counter = 10;
while (counter > 0)
{
    console.log(counter);
    counter --;
}
console.log("Blast Off!")

// for loops
var planetsLis = ["Mercury", "Venus", "Earth", "Mars","Jupiter", "Saturn", "Uranus","Neptune"] 
for (var i = 0; i < planetsLis.length; i++ )
{
    console.log(planetsLis[i]);
}

// Control Statements
// Break

var isGameOver = false;
let endPos = 5;
var xPos = 0;
var enemyPos = 4;

while (xPos < endPos) {
    xPos++
    console.log("pos = " + xPos);
    if (xPos == enemyPos) {
        console.log("Wasted");
        break;
    }
}

// forEach
var finalString = "the planets on the solar system are: "

planetsLis.forEach(function(planetName){
    finalString += planetName + " ";
});
console.log(finalString);