let car1 = {
    name : "Honda city",
    manufacturing : "Honda",
    fuelCapacity: 40,
    isAutomation : false
}

let car2 = {
    name: "Sonet",
    manufacturing: "Kia",
    fuelCapacity: 40,
    isAutomation: true
}

// console.log(car1);
// console.log(car2);
// console.log(car1.name);

// console.log(car2['fuelCapacity', car1.isAutomation]);


// Object using new keyword 

let myDetail = {
    name: "Farhaj qureshi",
    title : "I am a Fresher",
    experties: [
        "Frontend", "backend" , "FullStack", "javascript"
    ] ,
    followers: 15000
    
}


let myDetails = new Object();

myDetails.name = "Farhaj qureshi";
myDetails.title = "Frontend Engineer";
myDetail.experties = "developer";
myDetails.followers = 15000;
myDetails.greetMe = function() {
    console.log("Hello From Farhaj Qureshi -- PW Skills");
}
console.log( myDetailsmyDetails.greetMe())
