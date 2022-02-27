/*
1.Object with property (string,boolean,number,object,array,method(which will return a property value));
 */
const object = {
    name: 'alamgir',
    age: 17,
    isBrilliant: true,
    hisFriend: {
        name: 'sumon',
        isBrilliant: false,
        age: 19
    },
    subjects: ['bangla', 'english', 'mathematics', 'highermath', 'physics'],
    task: function () {
        return this.hisFriend;
    }
};
console.log(object.task());

//2.template string.minimum 3 property will be dynamic (nested object property,array second element,another property)
const tempStr = `${object.hisFriend.name} is very good in ${object.subjects[1]}.He is now ${object.age} years old.His duty is teaching his friend ${object.name}.`;
console.log(tempStr);

//3.1: no parameter arrow function.return 89.
const result = () => 89;
console.log(result());
//3.2: single parameter arrow function.will divide input by 7.
const division = x => x / 7;
console.log(division(14));
// 3.3: arrow function with two parameters.
const addDiv = (x, y) => (x + y) / 2;
console.log(addDiv(2, 6));
//3.4: multiline arrow function with two parameters.
const add = (x, y) => {
    const xAddition = x + 7;
    const yAddition = y + 7;
    const result = xAddition + yAddition;
    return result;
}
console.log(add(11, 13));

//4.map and divide each element by 7.
//map loop through over an array and get every array element and call the fucntion for every array element and stored the results in a new array and finally return the new array.
const myArray = [2, 13, 99, 77, 14, 97];
const divideBySeven = myArray.map(x => x / 7);
console.log(divideBySeven);

//forEach
//almost same of map().but doesn't store the results in a new array and doesn't return array.so we need to declare an empty array and finally need to push the results in the array.
const myArray2 = [4, 8, 9, 12, 84, 74];
const result2 = [];
const divideBySeven2 = myArray2.forEach(x => {
    const divide = x / 7;
    result2.push(divide);
});
console.log(result2);

//filter
//loop through for everyElement and then check condition and returns all the satisfied elements in a new array.
const myArray3 = [2, 38, 29, 12, 84, 74];
const greaterThan20 = myArray3.filter(x => x > 20);
console.log(greaterThan20);

//find
//loop through for everyElement and then check condition and returns just one and first satisfied element.
const myArray4 = [2, 38, 29, 12, 84, 74];
const greaterThan20FirstElement = myArray3.find(x => x > 20);
console.log(greaterThan20FirstElement);

//6.destucturing on object and array(get second element)
const object2 = {
    name: 'rahim',
    age: 19,
    isBrilliant: true,
    phone: 92039339
};
// const { name, age, isBrilliant, phone } = object2;
// console.log(age, isBrilliant);

// destructuring on nested object 
const object3 = {
    name: 'ali',
    age: 70,
    isBrilliant: false,
    hisFriend: {
        name: 'sumon',
        age: 77,
        isBrilliant: true
    }
};
const { name, age } = object3.hisFriend;
console.log(name, age);
// or 
const { name: x, age: y } = object3.hisFriend;
console.log(x, y);
//or
const { hisFriend: { name: c, age: d } } = object3;
console.log(c, d);


const myArray5 = [2, 9, 8, 7, 67, 55];
const [, balance] = myArray5;
console.log(balance);

// destructring nested array 
const myArray6 = [1, 2, 3, 4, [5, 6, 7], 8, 9, 10];
const [, , three, , [, six,], , nine] = myArray6;
console.log(three, six, nine);

//go the deck of cards and get the api and word on it:(using forEach and arrow function)


//go theCocktailDB web and get api and work on it;(using forEach and arrow function)