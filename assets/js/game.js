//GAME STATES
//"WIN" - PLAYER ROBOT HAS DEATED ALL ENEMY-ROBOTS
//  *FIGHT ALL ENEMY-ROBOTS
//  * DEFEAT EACH ENEMY-ROBOT
//"LOSE" - PLAYER TOBOTS HEALTH IS ZERO OR LESS



var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
  console.log (enemyNames[i], i);
}
var fight = function(enemyName) {

      while(enemyHealth  > 0 && playerHealth > 0)  {        
        // place fight function code block here . . .
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (playerHealth > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        }
        // if player choses to skip
         if(promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you would like to quit?")
      
            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
              }
          // if no (false), ask question again by running fight() again
          else {
            fight();
          }
        }
     

// if player choses to fight, then fight
   if(promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " +enemyName  + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    // Game States
// "LOSE" - Player robot's health is zero or less
    
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;

    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } 
  else {
    window.alert("You need to choose a valid option. Try again!");
    fight()
  } 
    }
  }

  


  

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}