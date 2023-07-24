

let age = prompt("hey whats your age?")

age = Number.parseInt(age) // Converting the string to a number help to type casting 

if(age<0){
    alert("This is an invalid age");
}
else if(age<9){
    alert("You are a kid and you cannot even think of driving");
}
else if(age<18 && age<9){
    alert("You are a kid and you can think of driving agter 18");
}
else{
    alert("You can now drive as you are above 18");
}

console.log("Done");


// turnary oprator in javascript :

console.log("you can",(age<18? "not drive" : "drive"));