/*primitive types*/
const number = 1;
const numberByConstructor = new Number(1);

const string = 'string';
const stringByConstructor = new String('string');

const boolean = true;
const booleanByConstructor = new Boolean(true);

const nullValue = null;

const undefinedValue = undefined;

/*non-primitive types*/
const array = [1, 2, 3];
const arrayByConstructor = new Array(1, 2, 3);

const object = { a: 1, b: 2, c: 3 };
const objectByConstructor = new Object({ a: 1, b: 2, c: 3 });

const mapByConstructor = new Map();
const setByConstructor = new Set();

const functionValue = function () {
    return 1;
};
const functionByConstructor = new Function('return 1');

const regexp = /a/;
const regexpByConstructor = new RegExp('a');

const promiseByConstructor = new Promise();

const dateByConstructor = new Date();

const errorByConstructor = new Error('error');
