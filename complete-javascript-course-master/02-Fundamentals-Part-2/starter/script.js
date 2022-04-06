// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// function name() {
//     console.log(`my name is Abhay Kumar!`);
// }

// name();
// name();
// name();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(5, 10));

// function calcAge1(birthYear) {
//     return 2022 - birthYear;                                         ///this is called the decleration form of a function;
// }
// console.log(calcAge1(2001));
// //method 2:
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;                                        ///this is expression form for functions so expressions returns a value, so it must return a value.
// }
// console.log(calcAge2(2001));

//arrow functions which are shorter and faster to write.
// const calcAge3 = birthYear => 2022 - birthYear;                       ////this is the simplest form of this function i.e 1 parameter.

// console.log(calcAge3(2001));

// const retirement = (birthYear, name) => {
//     const age = 2037 - birthYear;                                   
//     const retirement = 65 - age;
//     return `${name} retires in ${retirement}`;
// }

// console.log(retirement(2001, "Abhay"));

//calling one function from another function in JS//////////////////////////////////////////////////////////////////////////////////////////
//just like in c and c++ we can call another function from one function.

// function cutFruitPieces(fruit) {
//     return fruit * 12;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     // console.log(applePieces, orangePieces);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 4));

//////////////////////////////////arrays/////////////////////////////////////////////////////

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);



// ////another method

// const years = new Array(1991, 2000, 2001); // we need to use the `new` keyword otgherwise it wont work.
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);//to find the no.of elements in array.

// console.log(friends[friends.length - 1]);//last element of the array.

// //we can easily mutate the array i.r just overwrite the element at some specific position.

// friends[2] = "jay";
// console.log(friends);//question arises that why is it mutable if array is made const? only primitive values are immutable and arrays are not primitive.

// //we cannot change the entire array at once

// // friends = ["bob", "alice", "ben"];//this will lead to an error.i.e assignment ot const variable.

// const abhay = ["Abhay", "Kumar", 2022 - 2001, "student", friends];
// console.log(abhay);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const year = [1932, 1956, 1956, 1999, 2013, 2002];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[2]);
// const age4 = calcAge(year[3]);
// console.log(age1, age2, age3, age4)

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2]), calcAge(year[3])];
// console.log(ages);                                                                          //since functions results in a value to be returned so it can be called inside an array and its value can be evaluated.



//js has built in functions for arrays which are called methods.

// const friends = ['abhay', 'ashish', 'shahazeer'];
// friends.push('adi');                                            //used to add an element at the end//push returns the size of the new array .
// console.log(friends);
// const size = friends.push('sahil');
// console.log(size);

// friends.unshift('tamow');
// console.log(friends);                                      //unshift adds the element at the start of the array.

// //pop method removes the last emenet of the array.
// friends.pop();
// console.log(friends);                                        //pop returns the removed elements of the array

// console.log(friends.pop());


// //to delete the elements fromt the start we use shift basically  shifting the array towards left and removing the leftmost element.

// friends.shift();
// console.log(friends);                                          //does return the removed element;

// console.log(friends.indexOf('ashish'));                         //indexOf method returns the index of the element in the array 
// //if the element is not present it returns -1;
// console.log(friends.includes('shahazeer'));
// console.log(friends.includes('sahil'));                          //includes method is used in ES6 and it reutrns the true or 
//                                                                 //false value depending upon the presence of the element in the array.
//                                                                 //it uses the strict equality to check so no type conversion is taken to compare.
//                                                                 //can be used in conditionals.


//another data structure in JS is called objects. in arrays the elements are organised using their index numbers so to retrive them we need to use index but what if we want to use actual 
//names to retrive the data?
//objects are similar to maps in C++ and dictionaries in python.
//objects has multiple key and value pairs each value has a key assigned to it.

// const Abhay = {
//     firstName: "Abhay",
//     lastName: "Kumar",
//     age: 2022 - 2001,
//     job: "student",
//     friends: ['shahazeer', 'ashish', 'adi']                                     //in objects the order of inserting the data doesnt matter as there is no role of index numbers.
// };
// console.log(Abhay);

// //how to retrive and change data in objects:

// console.log(Abhay.lastName);
// console.log(Abhay['lastName']);

// //the difference comes down to basic understanding that u can evaluate the expression inside the [] but not when u use . to refer to some value.
// //e.g;
// const nameKey = "Name";
// console.log(Abhay["first" + nameKey]);
// console.log(Abhay["last" + nameKey]);
// //so in . a computed property name cant be used;

// //simple application of this is when you have to take input of some property from the user;
// const interestedIn = prompt('what do you want to know about Abhay? choose between firstName, lastName, age, job, and friends');
// console.log(Abhay[interestedIn]);
// //when a wront input is given it results in an falsey value to be evaluated so an undefined type which can be used in if else statements
// //e.g:
// if (Abhay[interestedIn]) {
//     console.log(Abhay[interestedIn]);
// } else {
//     console.log("wrong query!");
// }
// //adding new properties to the objects using both methods.
// Abhay.location = 'India';
// Abhay['twitter'] = '@AbhayKumar268'
// console.log(Abhay);

// console.log(`${Abhay.firstName} has ${Abhay.friends.length} friends and his bestfriend is called ${Abhay['friends'][0]}`);//this happens because the associativity of . and [] operator both are from left to right so first the object is accessed and then next property in it. and so on...

////////////objects methods////////////////////////
// const Abhay = {
//     firstName: "Abhay",
//     lastName: "Kumar",
//     birthYear: 2001,
//     job: "student",
//     friends: ['shahazeer', 'ashish', 'adi'],
//     hasDriverLicense: true,             //in objects the order of inserting the data doesnt matter as there is no role of index numbers.

//     // calcAge: function (birthYear) {                     // we use : instead of = here as now the calcAge is an object property and all object properties are assocaited to its key value using :
//     //     return 2022 - birthYear;                        //we need expressions in objects which evaluates to a value so we cannot use the normal declaration form of a function and have to use the expression from of funcitons
//     // }

//     calcAge: function () {
//         console.log(this);                               //'this' keyword is basically refers to the whole object in which we are working;
//         return 2022 - this.birthYear;                   //'this' is helpful in using the properties within the objects in the methods in that same object; 

//     }
// };

// console.log(Abhay.calcAge());        // using .         //since we care calling Abhay so the 'this' is replaced the object Abhay inside the method calcAge. will learn more about 'this' latter.
// console.log(Abhay['calcAge'](2001));    //using []   

//now consider that we need to use the age we get from the calcAge method more than once but whenever we call the method it calcualtes it every single time
//it will be very convinent to just calcualte it once and save it within the method as another property
// const Abhay = {
//     firstName: "Abhay",
//     lastName: "Kumar",
//     birthYear: 2001,
//     job: "student",
//     friends: ['shahazeer', 'ashish', 'adi'],
//     hasDriverLicense: false,

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(Abhay.calcAge());
// console.log(Abhay.age);
// console.log(Abhay.age);
// console.log(Abhay.age);
// console.log(Abhay.age);

// console.log(Abhay.getSummary());

//////////////LOOPS////////////////////////////////////////////////////
//used to automate all the various repetative tasks.
//always remember DRY principle DRY-Dont Repeat Yourself.
//for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);

// }
// //its similar to what we use in c and c++
// //most useful application of for loop is operating on arrays
// const abhay = ["Abhay", "Kumar", 2022 - 2001, "student", ["bob", "alice", "ben"]];

// for (let i = 0; i < abhay.length; i++) {
//     console.log(abhay[i]);
// }
// //another example;
// const years = [1991, 2007, 1969, 1902];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }

// console.log(ages);

// //continue and break;
// console.log("-------------when continue is used-------");
// for (let i = 0; i < abhay.length; i++) {
//     if (typeof abhay[i] !== 'string') {
//         continue;
//     }
//     console.log(abhay[i]);
// }

// console.log("-----------when break is used-----------");
// for (let i = 0; i < abhay.length; i++) {
//     if (typeof abhay[i] === 'number') {
//         break;
//     }
//     console.log(abhay[i]);
// }
//similarly we can use nexted for loops in JS

////////////////while loop///////////////////////////////////
//while loop is a general case of a for loop here instead of using a counter for breaking / stoping the loop we use a normal condition to break the loop and this loop is used when we do not know 
//how many times will the loop run.

//e.g

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While: lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// //e.g

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }