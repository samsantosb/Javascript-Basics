const obj = {
    name: 'Lee',
    age: 29
}

Object.entries(obj);
//this method returns an array of a given object's own enumerable string-keyed property [key, value] pairs

Object.keys(obj);
//this method returns an array of a given object's own enumerable property names

Object.values(obj);
//this method returns an array of a given object's own enumerable property values

Object.assign({}, obj);
//this method copies all enumerable own properties from one or more source objects to a target object
//this method dont change the original object

Object.freeze(obj);
//this method freezes an object, that is, prevents new properties from being added to it and
//prevents existing properties from being removed or modified

Object.isFrozen(obj);
//this method determines if an object is frozen

Object.seal(obj);
//this method seals an object, preventing new properties 
//from being added to it and marking all existing properties as non-configurable

Object.isSealed(obj);
//this method determines if an object is sealed

//comparing Objects

//trick to compare objects or arrays
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

//how do i compare these two objects?
//the answer is JSON.stringify
JSON.stringify(obj1) === JSON.stringify(obj2);





