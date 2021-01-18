var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
       name: "mike",
       age: 12 ,
       gender: "male"
},{
      name: "Madeline",
      age: 80 ,
      gender: "female"
},{
      name: "Cheryl",
      age: 80, 
      gender: "female"
},{
    name: "Sam",
    age: 30,
    gender: "male"

},{
    name: "Suzy",
    age: 4, 
    gender: "female"
}
]


//Part 1
function isOldEnoughWithName(){
var i = 0
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is old enough to see Mad Max");
    }
     else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 ){
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is not old enough to see Mad Max");
     
    }
           
}
}
isOldEnoughWithName();

function isOldEnoughWithGender(){
    for ( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if ( peopleWhoWantToSeeMadMaxFuryRoad[i].name >= "female" ){
            console.log ( peopleWhoWantToSeeMadMaxFuryRoad[i].gender+ "  Is not  old enough to enter movies");
        }
    else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].gender >= "male"){
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is  old enough");
    }
    }
}
isOldEnoughWithGender();
  // Loop Thru Numbers:
  for ( var x = 0; x <= 101; x++){
      if ( x === 0){
          console.log ( x + " Is Even " );
  }
  else if ( x % 2 === 0){
          console.log ( x + " Is Even ");
  
  }
  else {
      console.log ( x + " Is Odd ");
  }
}