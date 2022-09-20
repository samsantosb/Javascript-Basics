//Diferent ways to create objects

//Object Literal
const obj1 = {
    name: 'Lee',
    age: 29
}

//Object Constructor
const obj2 = new Object({
    name: 'Lee',
    age: 29
})

//Object.create
const obj3 = Object.create({ name: 'Lee', age: 29 });

//Object.assign
const obj4 = Object.assign({}, { name: 'Lee', age: 29 });

//Object.entries
const obj5 = Object.fromEntries([['name', 'Lee'], ['age', 29]]);

//JSON.parse
const obj6 = JSON.parse('{"name": "Lee", "age": 29}');


//Object Factory

//this is a design pattern that is used to create dinamic objects
function createObject(name, age) {
    return {
        name: name,
        age: age,
        day: 3,
        //test: this.day
    }
}

const obj7 = createObject('Lee', 29);
console.log(obj7);

//this is the same pattern with the diference that we use the keyword new
//this is a constructor function
function CreateObject(name, age) {
    this.name = name;
    this.age = age;
    this.day = 3;
    //this.test = this.day;
}

const obj8 = new CreateObject('Lee', 29);
console.log(obj8);
