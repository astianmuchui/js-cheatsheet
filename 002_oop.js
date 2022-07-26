// Constructor
function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    // Methods 
    this.getName = ()=>{
        return this.firstname+" "+this.lastname
    }
    this.getDob = ()=>{
        return this.dob   
    }
}

// Instantiate
const person1 = new Person('john','Doe','12-21-2020');

// Date Methods
console.log(person1.dob.getFullYear());

// Prototype functions 
Person.prototype.getFirstName = ()=>{
    return this.firstname
}


// Classes : syntactic sugar

class Car{
    constructor(carname , model, price){
        this.carname = carname
        this.model = model
        this.price = price
    }
    getCarname(){
        return this.carname
    
    }
    getModel(){
        return this.model
    }
    getPrice(){
        return this.price
    }
}

let car1 = new Car("Tesla","S",12222);
console.log(car1.getCarname())