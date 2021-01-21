// .shift():

var fruit = [ "banana", "apple", "orange", "watermelon"];

function groceries(){
    return fruit.shift();
    
}
console.log("fruit:", fruit)

// .pop():

var vegetables = [ "carrots", "tomatos", "pepper", "lettuce"];
function groceries(){
    return vegetables.pop();
}
console.log("vegetables:", vegetables)

// Remove last item in array:
function lastItem(){
    var vegetables = [ "carrots", "tomatos", "pepper", "lettuce"];
    return vegetables.indexOf(vegetables)
}
console.log("last indexof:", vegetables);