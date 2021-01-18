// Sum of 2 numbers:
function sumNumbers(a, b ){
    var sum = a + b;

    console.log( sum );
}
sumNumbers( 1, 2 );


// Return the largest of numbers:
console.log(Math.max( 20, 17, 42 ));

// Check for Odd or Even string:
 console.log( Math.floor(3));{
    console.log ("Odd"|| "Even");
 }
    
// CountChar :

var str = " Plus or Minus or Multiply and divide.";
   if ( str >= 20, str.length){
      console.log ( str + str);    
   } else{
       console.log("plus or minus");
   }

   function fibonacci(n){
    var numOne = 1, numTwo = 1, nextNum, intSum = 0;
    console.log("value of n:"  + n);
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    for(var s = 2; s <= n; s++) {
        console.log("First #:"  + numOne);
        console.log("Second #:"  + numTwo);
        nextNum = numOne + numTwo
        intSum += nextNum;
        console.log("Intrerim Addition" + intSum)
        numOne = numTwo;
        numOne = nextNum;
    }
    return intSum;
}
console.log(fibonacci(6));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  