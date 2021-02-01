// Section A:
console.log("Section A")
function fiveAndGreaterOnly(arr){
    
    return arr.filter(function(item){
        return item >= 5;
    })
    

        
 }
console.log( fiveAndGreaterOnly([3, 6, 8, 2]));
        
// Return new array with even numbers:
function evensOnly(arr){
    var arr = [3, 6, 8, 2];
    return arr.filter( number => number % 2 == 0);

    
    
}
console.log(evensOnly([3, 6, 8,2] ));

// Extra Credit:
// Prob.#1:
function ofAge(arr){

    return arr.filter(function( age){
        return age.age >= 18;
    })

}

    console.log(ofAge([
    {name: "Angelina Jolie:", age: 80},
    {name: "Eric Jones:", age: 2},
    {name: "Paris Hilton:", age: 5},
    {name: " Kanyne West:", age: 16},
    {name: "Bob Ziroll", age: 100}
]));

// section B:
function doubleNumbers(arr){
   return arr.map(function(item){
        return item * 2;

    })
}
console.log(doubleNumbers([2, 5, 100]));

// make array into string:
function stringItUp(arr){
    return arr.map(function(item){
        return item * 1;
})
}
console.log(stringItUp([2, 5, 100]));

// Cap. each Name:
function capitalizeNames(arr){
 return arr.map(function(cap){
    return  cap.charAt(0).toUpperCase() + cap.slice(1).toLowerCase(); 
 

 
 } );  
}
console.log(capitalizeNames(["john", "JACOB", "JinGleHiemer", "schimdt"]));

// Extra Credit:
/*
function nameOnly(arr){
   return arr.name + "" + arr.age;

return arr.map(concetenateNameWithAge);
}
console.log(nameOnly([
    {
    name: "Angelina Jolie",
    age: 80
},

{
    name: "Eric Jones",
    age: 2

},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kanye West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]));*/

// Section C :

//NUM. ONE:
function total(arr){
return arr.reduce(function(num1, num2){
    return num1 + num2;
})
}
console.log(total([1, 2, 3]));

// NUM.2:

function stringConcat(arr){
  return arr.reduce(function(sum){
      return arr.concat().toString().replace(/,/g, '') ;
  })
}
console.log(stringConcat([1,2,3]));

//Num.3:
function totalVotes(arr){
/*     return arr.reduce(function(voter){
        return voter.voted
           
}} */
return arr.reduce(function(voter){
    if(voter === voter)
    return "hello" ;
})
}

var voters = [
    {name: "Bob" , age: 30, voted: true},
    {name: "Jake",  age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted:false},
    {name: "Phil", age: 21, votd:false},
    {name: "Ed", age: 55, voted:true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age:43, voted: false},
    {namw:"Joey", age: 41, voted:true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: true}
    
    
        
];
 
    


console.log(totalVotes(voters));

// Extra credit:
function flatten(arr){
    

}
var arrays = [
    [ "1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

// Section D:

// Num.#1
function leastToGreatest(arr){
 return  arr.sort(function(a, b){
        return a - b;
    })

}

    console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

    // Num.#2:

    function greatestToLeast(arr){
      return arr.sort(function(a, b){
        return b - a;
    })   
    }
    console.log(greatestToLeast([1, 3, 5, 2, 90, 20 ]));

    // Num.#3:

    function lengthSort(arr){
        
        return arr.sort(function(a, b){
            return a.length - b.length;

        })

    }
    console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

    // Extra Credit:
    
    
    function alphabetical(arr){
        return arr.sort(function(a, b){
           if( a < b){
               return -1;
           } 
           if( a > b){
               return 1;
           }
           return 0;

        })

    }
    console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));