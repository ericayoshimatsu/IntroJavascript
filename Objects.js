/*----------------------------
Objects
------------------------------
*/

var GameCharacter = {
    name: "Saitama",
    pos: 2,
    health:9000,
    get currHealth() {
        return "Health = " +  this.health;
    },
    set maxHealth(h) {
        this.health = h;
    },
    //methods
    move: function(byAmount){
        this.pos += byAmount;
    }
}

console.log(GameCharacter.name);
console.log(GameCharacter.pos);

GameCharacter.move(10);

console.log(GameCharacter.pos);

// assign function to object
GameCharacter.ypos = 0;
GameCharacter.move = function(x,y){
    this.pos += x;
    this.ypos += y;
}

GameCharacter.move(10,10);

console.log(GameCharacter.pos + " : " + GameCharacter.ypos);

GameCharacter.maxHealth = 150
console.log(GameCharacter.currHealth)

var gc = GameCharacter; // by Reference!



