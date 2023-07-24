// Create a Element is Dynamically 

const nameNode = document.createElement('h1');
nameNode.id = 'name';


const bodyRef = document.getElementsByTagName('body');
bodyRef.prepend('nameNode');

nameNode.innerHTML = "Farhaj qurehi";


console.log(nameNode);






const nameRef = document.getElementById('name');
console.log(nameRef);

nameRef.innerHTML = "Farhaj qureshi";

const descriptionRef = document.getElementsByClassName('description')[0];

const description = document.getElementsByClassName('description');
console.log(description);

bodyRef.removeChild(descriptionRef);

