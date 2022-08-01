/*
    Brief Re-study of Javascript 
*/
// console 
console.log("Hello world");

// Console methods : ERROR , L0G ,WARN

// Var , let and const
var age = 15;
const name = "Me";

// concatenation 
console.log(`My name is ${name} and I am ${age}`);

// String methods 
 
var s = "Hello world";

console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toLowerCase);

// split 
const techs = "tech , comps ,IT , code"
console.log(techs.split(','));

/*
Arrays 
*/

// Array Constructor 
const numbers  = new Array(1,2,3,4,5,6);

// Bracket method 
const fruits = ['tomato','cherry'];

fruits[2] = "strawberry";

// Add something to the end 
fruits.push('mangos');

// Add to the beginning 
fruits.unshift("Avocado");

// Remove last elem 
fruits.pop()

console.log(fruits)

// Check if is array 

let condition = Array.isArray(fruits);
let index = fruits.indexOf("tomato");


// Object literals 

const person = {
    fname: "john",
    sname: "hayes",
    age:30,
    hobbies: ['movies','programming'],
    // Embedded objects 
    address:{
        street: 'Meru dtb bank',
        city: 'meru',
        state: 'Kenya'
    }      
}

console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.state)

// De-structuring

const {fname,sname, address:{ city }} = person;
console.log(fname);

// Add properties 
person.email = "somemail@gmail.com";

const todos = [
    {
        id: 1,
        text: 'Write code',
        done: false
    },
    {
        id: 2,
        text: 'Write more code',
        done: true
    }
] ;

console.log(todos[0].text);
// Convert to JSON (JAVASCRIPT OBJECT NOTATION)
const todoJson = JSON.stringify(todos)
console.log(todoJson)
// Convert from JSON  to javascript
console.log(JSON.parse(todoJson))

// Loops 

// For Loop 

for(let i=0; i<3; i++ ){
    console.log(i);
}

let j = 0;
while(j<2)
{
    j++
    console.log(j)
}

// Loop through array 

for(b = 0;  b<todos.length; b++){
    console.log(todos[b].text);
}

// Other methods 

for (let todo of todos)
{
        console.log(todo.id);
}

// Higher order functions 

todos.forEach(function todo(todo){
    console.log(todo.text)
});

// Map 
// Returns an array
const todoText = todos.map((todo)=>{
    return todo.text
});

const todoComplete = todos.map((todo)=>{
    return todo.done === true
});

// Filter 

const doneTodo = todos.filter((todo)=>{
    return todo.done === true
}).map((todo)=>{
    return todo.text
})

// Conditionals 

/*
    === Checks both data type and value 
*/

let num = 10;
let status;

if(num === 10){
    status = "num is 10"   
}else if(num > 5){
    status = "Greater than 5"
}else{
    status = "num is not 10"
}

/*
    || OR
    && AND
    If statements can be nested
*/

// Ternary operators 
let x = 6;
const color = x>5? 'red' : 'blue';

// Swtch and Case 

switch(color){
    case 'red':
        console.log(
            'Color is red'
        );
    case 'blue':
        console.log(
            'Color is blue'
        );    
}

// Functions 

function add(num1,num2){
    console.log(num1+num2)
}
add(4,8)


//  In arrow functions , return keyword is not used 
