var readlineSync = require( 'readline-sync' )

// Wait for user's response.
var operatorName = readlineSync.question( "May I have your Name?" );
console.log( "Hi " + operatorName + "!" );
// Enter Numbers:
var num1 = readlineSync.questionInt("Please Enter First Number");
// Enter Numbers:
var num2 = readlineSync.questionInt("Please Enter Second Number");

function myFunction(){

    // Enter Arithmetic:
 var operatorName = readlineSync.question("Please enter the operation to perform: add, sub, mul, div, mod, exp, ?" )
    // ADD Numbers + :
    if(operatorName == "add"){
        add(num1, num2);
    // Subtract Numbers - :
    }else if(operatorName == "sub"){
        sub( num1, num2);
    }
    // Multiply Numbers * :
    if( operatorName == "mul"){
        mul(num1, num2);
    // Divide Numbers / :
    }else if(operatorName == "div"){
        div(num1, num2);
    // Module Numbers % :
    }else if(operatorName == "mod"){
        mod(num1, num2);
    // Exponentiation Numbers ** :
    }else if(operatorName == "exp"){
        exp(num1, num2);  
    } 
}

myFunction()
    // ADD + :
function add( num1, num2 ){
    console.log("The Result Is:", num1 + num2);
}
// Subtract - :  
function sub( num1, num2 ){
      console.log("The Result Is:", num1 - num2);
  }  
  // Multiply * :
  function mul( num1, num2 ){
      console.log( "The Result Is:", num1 * num2);
  }
  // Divide / :
  function div( num1,  num2 ){
      console.log( "The Result Is:", num1 / num2);
  } 
  // Module % :
  function mod( num1, num2){
      console.log( "The Result Is: ", num1 % num2);
  }
  // Exponentiation ** :
 function exp( num1, num2){

   console.log("The Result Is:", num1 ** num2);
  }