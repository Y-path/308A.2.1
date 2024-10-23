
//  Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        },
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"],
        }   
    }  
    }
    
    adventurer.roll()
    adventurer.roll()
    adventurer.roll()
    
    
 // Part 2   

    class Character {
        static MAX_HEALTH = 100;
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
      }
    // Below is commented out so I could redeclare the classes in Part 3
    //   const robin = new Character("Robin");
    //   robin.inventory = ["sword", "potion", "artifact"];
    //   robin.companion = new Character("Leo");
    //   robin.companion.type = "Cat";
    //   robin.companion.companion = new Character("Frank");
    //   robin.companion.companion.type = "Flea";
    //   robin.companion.companion.inventory = ["small hat", "sunglasses"];

    //  robin.roll() 
    //  robin.companion.roll()
    //  robin.companion.companion.roll()


// Part 3 and Part 4
      
class Adventurer extends Character {
   static ROLES = ["Fighter", "Healer", "Wizard", "Rogue", "Mediator"];  
  constructor (name, role) {
    
    if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
      }  
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  run () {
    console.log(`${this.name} is running...`);
    super.roll();
  }
}

class Companion extends Character {
    constructor (name, role) {
        super(name);
        this.role = role;
        this.inventory.push("healing potion", "5 scratches");
    }
    sneak () {
        console.log(`${this.name} is sneaking.....`);
        super.roll();
    }
}
const robin = new Adventurer("Robin", "Healer");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Rogue");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank", "Wizard");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll() 
robin.companion.roll()
robin.companion.companion.sneak();


// Part 5

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
