
function deliverProduct(name,callback){
    console.log("Don with delivered of " + name)
    callback();
}


function successFunction(){
    console.log("Product has been successfully delivered");
}

// deliverProduct("Macbook",successFunction);

const calculate = (a,b,operation) => {
    return operation(a,b);
}


// method - 1 

const addition =  calculate(8,6,function(sum1,sum2){
    return sum1 + sum2;
})

console.log(addition);

// method - 2 

const subtraction = (a,b) => a-b;
const subResult = calculate(8,3,subtraction);
console.log(subResult);


// method - 3 

function multiply(a,b) {
    return a * b;
}
const mulResult = calculate(3,2,multiply);

console.log(mulResult);







// callback function  to execute when the timer expires


// function getCheese(callback) {
//     setTimeout(function(cheese) {
//          cheese = "🧀";
//         //  console.log("here is cheese " , cheese);
//          callback(cheese);
//     },2000);
// }
// getCheese(function(cheese) {
//     // console.log("got the cheese",cheese);
// });