var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have Your Name?');
var welcomeMessage = `Hello ${playerName}, welcome to the Escape Room Game Simulation`;
console.log(welcomeMessage);

var isAlive = true;
 var hasKey = false;

 while(isAlive == true){
     const menuOptions = readlineSync.keyIn('Enter 1 to Put hand in hole /n Enter 2 to Find the key /n Enter 3 to Open the door', {limit: '$<1-3>'});
     console.log(menuOptions);
if (menuOptions == 1){
    
    console.log(`${playerName}, oops, you are DEAD. Game is Over.`);
    isAlive= false;

}
else if (menuOptions == 2 && hasKey == false ){
    console.log(`${playerName}, you have found the key successfully!`);
    hashKey = true;
}
else if(menuOptions == 2 && hashKey == true){
    console.log(`${playerName}, you have Already found the key. Please proceed to option-3 asap! `)
}
else if(menuOptions == 3 && hashKey == false){
    console.log(`${playerName}, unfortunately, you do not possess the key. please find the  key first!`)
}
else if(menuOptions == 3 && hashKey == true){
    console.log(`${playerName}, you found the key, you opened the door, you escaped from the game roomsuccessfuly. Congratsulation! `);
    isAlive = false;
}
 }