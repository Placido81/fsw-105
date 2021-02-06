const readlineSync = require('readline-sync');

const name = readlineSync.question('Please Enter Your Name ');

readlineSync.question('Hello' + name + ', Welcome to THE DOOMMED! Where you will risk your life to defeat evil. Press Enter to begin.');

const shadyGuys = [ 'Killer Beast', ' Creecher', 'Lost Gobling', 'Cyber Mutant'];
const treasure = [ 'Meedkit', 'Security Armour', 'Berserk Park', 'Health Position'];
var prize = [];
let userHealth = 40;
const options = [ 'Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random()* treasure.length)];

function game(){
  const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
  const shadyGuy = shadyGuys[Math.floor(Math.random() * shadyGuys.length)];
  let shadyGuysHealth = 40;
  const shadyGuysPower = Math.floor(Math.random()* (5 - 4 + 3) + 5);

  const index = readlineSync.keyInSelect(options, 'What would like to do next?');

  if( options[index]=='Exit'){
    return userHealth = 0;
  } else if (options[index] == 'Print'){
    console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
  } else if (options[index] === 'Walk'){
    let key = Math.random();
    if(key <= .3){
      console.log('Walking Fast!!')  
    } else if (key >= .3){
      console.log(shadyGuy + 'showed up.');
      
      while(shadyGuysHealth > 0 && userHealth > 0 ){

        const user = readlineSync.question('What do you want to do? enter "r" to run or "a" to attack:');
        switch (user){
          case "r":
            const run = Math.random();
            if(run < .5){
              console.log('Before you can run away' + shadyGuy + 'attacks you with:' + shadyGuysPower);

            }else{
              console.log('You Ran Away!!');
              break;
            }
            case "a":
            shadyGuysHealth -= attackPower;
              console.log('You attacked' + shadyGuy + 'with' + attackPower + 'attack power');
              userHealth -= attackPower;
              console.log('Enemey just attacked you with:' + attackPower + 'attack power');

              if(shadyGuysHealth <= 0 ){
                console.log('You excuted' + shadyGuy + '.\n' + shadyGuy + 'left:' + pickUp);
                let loot = Math.random();
                if( loot <= .3){
                  prize.push(pickUp);
                }
                
              }else if(userHealth<= 0) {
                console.log( shadyGuy + ' had defeated you, YOU ARE DEAD!')
              }
            }

        }

      }
    }
}
  
  while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}
 

