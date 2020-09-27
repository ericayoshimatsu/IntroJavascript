class GameCharacter {

    constructor(name="def", xPos=0, health=200) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }

    move(x) {
        this.xPos += x;
    }

    info() {
        return this.name + "-" + this.guild  +" / Pos: " + this.xPos + " / Health: " + this.health;
    }

}

// sub-class inheritance
class HumanCharacter extends GameCharacter {
    constructor(name, xPos, health) {
        super(name, xPos, health);
        this.guild = "Human"
    }
}

var gc1 = new GameCharacter("Player1", 0);
gc1.move(10);
console.log(gc1.info());

var hc1 = new HumanCharacter();
console.log(hc1.info())