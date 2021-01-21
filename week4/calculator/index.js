// ADD + :
let input1 = document.getElementById("test")

let input2 = document.getElementById('test1')

let button = document.getElementById("submit1")
button.addEventListener("click", function(){
    let add = Number(input1.value) + Number(input2.value)
let output = document.createElement("h1")
output.textContent = add
let plus1= document.getElementById("plus1")
plus1.append(output)
})

//Minus - :
let input3 = document.getElementById("test2")

let input4 = document.getElementById("test3")
let button1  = document.getElementById("submit2")
button1.addEventListener("click", function(){
    var sub = Number(input3.value) - Number(input4.value)
    var output1 = document.createElement("h1")
    output1.textContent = sub
    let mark1 = document.getElementById("mark1")
    mark1.append(output1)


})

let input5 = document.getElementById("test4")

let input6 = document.getElementById("test5")
let button2  = document.getElementById("submit3")
button2.addEventListener("click", function(){
    var mul = Number(input5.value) * Number(input6.value)
    var output2 = document.createElement("h1")
    output2.textContent = mul
    let mark2 = document.getElementById("mark2")
    mark2.append(output2)

})
