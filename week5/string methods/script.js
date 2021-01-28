function capitlizedAndLowercased(str1){

    var str2 = str1.toUpperCase();
    var str3 = str1.toLowerCase()
    console.log(str2 + str3)
    //console.log("All Capitol Letters:"    + str2);
}
capitlizedAndLowercased("hello")
// All Lower Case Letters:

//var str2 = str1.toLowerCase();
//str1.toLowerCase();

//console.log("all Lower Case Letters:" + str1.toLowerCase());

// Return half Lngth. Numb.Round Down:
var half = "places"
function myFunction(math){
    console.log(Math.floor( math.length / 2 ));
}
myFunction(half)
//console.log( Math.floor(5.57));
 
// Return First half Of String:


 str2 = str1.slice(  0, str1.length / 2  );
console.log( str2 );

let fav  = "Hello World";
 fav1 = fav.slice( 0, fav.length / 2 );
console.log( fav1) ;

// Capitalize First Half of string:
let firstHalf = "Hello World";
let first = firstHalf.slice( 0, firstHalf.length / 2);
let second = first.toUpperCase();
console.log(second);
let third = firstHalf.slice( firstHalf.length / 2);
let fourth = third.toLowerCase();
console.log(fourth);
let seven = second + fourth;
console.log( seven);