
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


// Part 3, 4, 5, 6, and 7 
      
class Adventurer extends Character {
   static ROLES = ["Fighter", "Healer", "Wizard", "Rogue", "Mediator"];  
  constructor (name, role) {
    
    if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
      }  
    super(name);        
    this.role = role;   
    this.inventory.push("bedroll", "50 gold coins");
  }
  
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  run () {
    console.log(`${this.name} is running...`);
    super.roll();
  }
  duel (adventurer) {

    while (this.health > 50 && adventurer.health > 50) {
       
        const roll = Math.floor(Math.random() * 20) + 1;
        const roll2 = Math.floor(Math.random() * 20) + 1;     
       
        if (roll < roll2) {
            this.health -= 1;
          } else if (roll2 < roll) {
            adventurer.health -= 1;
            
          }          
          console.log(`${this.name} attacks ${adventurer.name} for ${roll} damage!`);
          console.log(`${adventurer.name} attacks ${this.name} for ${roll2} damage!`);
            
        console.log(this.health)
        console.log(adventurer.health)
     }
  
      if (this.health > 50) {
        console.log(`${this.name} with ${this.health} health remaining defeats ${adventurer.name} with ${adventurer.health} health remaining in a duel!`);
        return this.name;
      } else if (adventurer.health > 50) {
        console.log(`${adventurer.name} with ${adventurer.health} health remaining defeats ${this.name} with ${this.health} health remaining in a duel!`);
        return adventurer.name;
      }
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

class Spirit extends Character {
    constructor (name, role) {
        super(name);
        this.role = role;
        this.inventory.push("soul gem", "8 haunts");
    }
    scare () {
        console.log(`${this.name} is scaring.....`);
        super.roll();
    }
    inhabit () {
        console.log(`${this.name} is inhabiting.....`);
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
  const hope = new Adventurer("Hope", "Mediator");
  robin.roll() 
  robin.companion.roll()
  robin.companion.companion.sneak();  
  const biff = new Adventurer("Biff", "Fighter");
  hope.duel(robin)  
  robin.duel(biff)
  const casper = new Spirit("Casper", "Rogue")
  console.log(casper)



  // I did not use this part

// class AdventurerFactory {  
//     constructor (role) {
//       this.role = role;
//       this.adventurers = [];
//     }
//     generate (name) {
//       const newAdventurer = new Adventurer(name, this.role);
//       this.adventurers.push(newAdventurer);
//     }
//     findByIndex (index) {
//       return this.adventurers[index];
//     }
//     findByName (name) {
//       return this.adventurers.find((a) => a.name === name);
//     }
//   }