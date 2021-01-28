function myFunction(){

var fruit = [ "banana", "apple", "orange", "watermelon"];
var vegetables = [ "carrots", "tomatos", "pepper", "lettuce"];
 
// Remove last item fr. Array: 
  vegetables.pop();
console.log("vegetable:", vegetables);
 
// Remove first item inn array:
 
fruit.shift();
console.log("fruit:", fruit);
// Find index of orange:
var indexOfOrange = fruit.indexOf("orange");
console.log("first appearance of orange string :", + indexOfOrange );
// put number of orange in back of array:
fruit.push(indexOfOrange);


// Find length of vegetables array:
 
 
   var veg = vegetables.length;
   console.log(vegetables.length);
   vegetables.push(veg);
   
 // put two arrays together make new one:
 
 
 var food = fruit.concat(vegetables);
 console.log(food);

 //
 food.splice(4, 2)
 // Revers Array :
 food.reverse();
 //console.log(food);
 // Turn array into string & return it:
 var str = food.toString();
 console.log(str);
 
};
myFunction();
    
    

    




