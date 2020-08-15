/*----------------------------
Objects
------------------------------
*/

var GameCharacter = {
    name: "Saitama",
    pos: 2,
    health:9000,
    //methods
    move: function(byAmount){
        this.pos += byAmount;
    }
}

console.log(GameCharacter.name);
console.log(GameCharacter.pos);

GameCharacter.move(10);

console.log(GameCharacter.pos);