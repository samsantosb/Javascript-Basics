/*array methods*/
const arr = [1, 2, 3, 4, 5];

//this method returns a new array, it doesn't change the original array
//it concatenates the original array with the argument array
arr.concat([6, 7, 8, 9, 10]);

arr.every((item) => item > 0);
//this method returns true if all the items in the array pass the test implemented by the provided function

arr.filter((item) => item > 3);
//this method creates a new array with all elements that pass the test implemented by the provided function

arr.find((item) => item > 3);
//this method returns the value of the first element in the array that satisfies the provided testing function

arr.findIndex((item) => item > 3);
//this method returns the index of the first element in the array that satisfies the provided testing function

arr.forEach((item) => console.log(item));
//this method executes a provided function once for each array element

arr.includes(3);
//this method determines whether an array includes a certain value among its entries,
//returning true or false as appropriate

arr.indexOf(3);
//this method returns the first index at which a given element can be found in the array,
//or -1 if it is not present

arr.map((item) => item * 2);
//this method creates a new array with the results of calling a
//provided function on every element in the calling array

arr.pop();
//this method removes the last element from an array and returns that element

arr.shift();
//this method removes the first element from an array and returns that element

arr.push(6);
//this method adds one or more elements to the end of an array and returns the new length of the array

arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//this method applies a function against an accumulator and each value of the array

arr.toString();
//this method returns a string representing the specified array and its elements

arr.reverse();
//this method reverses an array in place

arr.splice(2, 1);
//this method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements
//this method change the original array

arr.slice(2, 4);
//this method returns a shallow copy of a portion of an array into a new array object
//this method doesn't change the original array

arr.sort();
//this method sorts the elements of an array in place and returns the array

arr.length;
//this property returns the number of elements in an array




