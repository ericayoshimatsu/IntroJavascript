/*-----------------------
Functions
------------------------
*/

// var pos = 0;

function move (pos, byAmount)
{
    const newPos = pos + byAmount;
    return newPos;
}

finalPos = move(0, 10);

console.log(finalPos);

var currentHealth = 50;
var maxHealth = 200;

console.log("Health = " + currentHealth);

function heal(healAmount=10) {
    var newHealth = currentHealth + healAmount;
    currentHealth = newHealth > maxHealth? maxHealth : newHealth;
    // function nested() {

    //}
    // nested functions can only be called within the main function
    return (currentHealth / maxHealth) * 100;
}

var percentage = heal(50);
console.log("Health = " + currentHealth + " = " + percentage + "%");
percentage = heal();
console.log("Health = " + currentHealth + " = " + percentage + "%");

// function as parameter
//var func = function heal2() {
//    currentHealth += healAmount;
//}