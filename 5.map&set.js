/*Map Data Structure*/
// Map is a collection of keyed data items, just like an Object.
//But the main difference is that Map allows keys of any type.

//how to create a Map
const map = new Map(
    [
        ['name', 'Lee'],
        ['age', 29]
    ]
);

//other way to create a Map
const map2 = new Map();
map2.set('name', 'Lee');
map2.set('age', 29);

//how to get the size of a Map
map.size;

//how to get the value of a key
map.get('name');

//how to check if a key exists
map.has('name');

//how to delete a key
map.delete('name');

//how to clear a Map
map.clear();

//how to iterate over a Map
for (let [key, value] of map) {
    console.log(key, value);
}

//how to iterate over a Map keys
for (let key of map.keys()) {
    console.log(key);
}

//how to iterate over a Map values
for (let value of map2.values()) {
    console.log(value);
}

//how to iterate over a Map entries
for (let entry of map2.entries()) {
    console.log(entry);
}

/*Set Data Structure*/
// Set is a collection of values, where each value may occur only once.

//how to create a Set
const set = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);

//how to get the size of a Set
set.size;

//how to add a value to a Set
set.add(6);

//how to check if a value exists in a Set
set.has(6);

//how to delete a value from a Set
set.delete(6);

//how to clear a Set
//set.clear();

//how to iterate over a Set
for (let value of set) {
    console.log(value);
}

//how to iterate over a Set entries
for (let entry of set.entries()) {
    console.log(entry);
}

//how to iterate over a Set keys
for (let key of set.keys()) {
    console.log(key);
}

//how to iterate over a Set values
for (let value of set.values()) {
    console.log(value);
}

//Eliminating duplicates from an array using Set
const array = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const uniqueValues = [...new Set(array)];


