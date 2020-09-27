function gameCharacter (name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;

    this.move = function(x) {
        this.xPos += x;
    }
    this.guild = "Human";

    //this.info =  this.name + "-" + this.guild  +" / Pos: " + this.xPos + " / Health: " + this.health;
    this.info = function() {
        return this.name + "-" + this.guild  +" / Pos: " + this.xPos + " / Health: " + this.health;
    }
}

var gc1 = new gameCharacter("Player1", 0, 100);
var gc2 = new gameCharacter("Player2", 100, 0);

gc1.health = 150;
gc1.move(10);

console.log(gc1.info());
console.log(gc2.info());
console.log(gc1.health);

//Prototype -> Assign to all Objects
gameCharacter.prototype.yPos = 1;
console.log(gc1.yPos)