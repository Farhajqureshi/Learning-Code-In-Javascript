/// As a argument 

let getSeven = function() {
    return 7;
};

function useFunction(fn) {
    return fn();
}

// console.log(useFunction(getSeven));

function returnFucntion(){
    return getSeven;
}

const exFunc = returnFucntion();

console.log(exFunc());