/*Object Oriented Programming*/
//1. Class Declaration

class Person {
    constructor(name, age) {
        //this is a public property
        this.name = name;
        this.age = age;
    }
    //this is a public method
    getAge1() {
        return this.age;
    }
}

//2. Class Expression
const Person2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge2() {
        return this.age;
    }
}

//3. Inheritance 
/*Inheritance is a way to create a new class based on an existing class
The new class is called a subclass or derived class
The existing class is called a superclass or base class
The subclass inherits all the properties and methods from the superclass
The subclass can add new properties and methods
The subclass can override existing properties and methods
Actually, people recomend to use dependency injection instead of inheritance
*/

class Student extends Person {
    constructor(name, age, school) {
        //this is this is a shortcut to call the parent constructor
        //super()
        //tihs.age = age;
        //this.name = name;
        super(name, age);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getAge3() {
        //you  can call a parent method inside a child method, using super
        return super.getAge1();
    }
}

const student = new Student('student', 10, 'school');

//4. Encapsulation
/*Encapsulation is a way to hide the implementation details of a class
The class exposes only the necessary properties and methods
The class hides the unnecessary properties and methods
The class hides the properties and methods that should not be accessed from outside
*/
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    //private method
    #getName() {
        return this.age;
    }
    getAge() {
        return this.age;
    }
}

const person3 = new Person3('person3', 10);

//5. Abstraction
/*Abstraction is a way to hide the implementation details of a class
The class exposes only the necessary properties and methods
The class hides the unnecessary properties and methods
The class hides the properties and methods that should not be accessed from outside
*/
//create a abstract class
class AbstractPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (new.target === AbstractPerson) {
            throw new Error('Abstract class "AbstractPerson" cannot be instantiated directly.');
        }
    }

    getAge() {
        throw new Error('You need to implement the getAge method');
    }
}

//const abstractPerson = new AbstractPerson('abstractPerson', 10);

//create a class that extends the abstract class
class Person4 extends AbstractPerson {
    constructor(name, age) {
        super(name, age);
    }
    getAges() {
        return this.age;
    }
}

const person4 = new Person4('person4', 10);
console.log(person4.getAges());

//6. Dependecy Injection
/*Dependency Injection is a way to create a new class based on an existing class
The new class is called a subclass or derived class
*/
class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

class Student2 {
    constructor(person) {
        this.person = person;
    }
    getAge() {
        return this.person.getAge();
    }
}

const person5 = new Person5('person5', 10);
const student2 = new Student2(person5);

//8. Singleton
/*Singleton is a Class that can have only one instance*/
class Singleton {
    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
        this.age = 10;
        console.log(this)
    }
}

const singleton = new Singleton('singleton');
const singleton2 = new Singleton('singleton2');
console.log(singleton.name);
console.log(singleton2.name);
