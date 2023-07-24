// Using AsyncFunction  setTimeout();

// console.log("hello"); // This is line javascript are Synchronous js


// Using arrow functions  

// setTimeout(() => {
//     console.log("This will execute later")
// }, 5000);

// Normal function using  


// The global setTimeout() method sets a timer which executes a function 
// or specified piece of code once the timer expires.  

// setTimeout(function() {
//     console.log("This will execute later")
// }, 5000);



// Callback hell 

// example pizza -> dough -> cheese   


function getCheese(callback) {
    setTimeout(function(cheese) {
        cheese = "🧀";
        console.log("Here is Cheese" + cheese);
        callback(cheese);
    },4000);

}

function makeDough(cheese, callback) {
    setTimeout(function(dough){
        dough = "🫓";
        console.log("Here is Dough:" + dough);
        callback(dough);
    },4000);
}

function makePizza(dough,callback) {
    setTimeout(function(pizza){
        pizza = "🍕";
        console.log("Don with make your pizza:" + pizza);
        callback(pizza);
    },4000)
}



getCheese(function(cheese) {
    makeDough(cheese, function(dough) {
        makePizza(dough,function(pizza) {
            console.log("My Pizza is done i got is " + "🙂");    // This is a example of callback hell  
        })
    })
})



 