

function sum(x,y){
    return x+y;
}

function subtraction(x,y) {
    return x-y;
}

function multiplication(x,y){
    return x*y;
}

function division(x,y){
    return x/y;
}

function calculateFunction(fn,x,y){
    return fn(x,y);
}

console.log( " Sum :", calculateFunction(sum,34,59));
console.log( " Subtraction" ,calculateFunction(subtraction,34,59));
console.log( "Multiplication : " ,calculateFunction(multiplication,34,60));
console.log( "Division : " ,calculateFunction(division,34,60));

