// console.log('you and family');
// console.log(" ahsan");
// console.log("nimra pretty");


// function multiply(num1,num2) {
//        console.log(num1*num2);
// }
// multiply(2,5)
// multiply(10,10)



// const number = 5;

// if (number > 0) {
//   console.log("The number is positive.");
// } else {
//   console.log("The number is not positive.");
// }

// let num = 7;
// if (number % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }


// var age = 25;
// var ticketPrice;

// if (age < 12) {
// console.log(" ticketPrice = 5");
// } else if (age >= 12 && age < 18) {
//   ticketPrice = 10;
// } else if (age >= 18 && age < 60) {
//   ticketPrice = 20;
// } else {
//   ticketPrice = 15; 
// }


// let hour =20;
// let greeting;
//   if (hour < 10) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

//   let hour = new Date().getHours();
//   let greeting;
// if (hour < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// var flower = "tulip";

// switch (flower){
//     case "rose":
//         console.log("Roses are red");
//         break;
//     case "violet":
//         console.log("Violets are blue");
//         break;
//     case "sunflower":
//         console.log("Sunflowers are yellow");
//         break;
//     default:
//         console.log("Please select another flower");
// }

// for (var i = 12; i <= 24; i++) {
//        console.log("value of i");
// }

// for (var i = 12; i <= 24; i++) {
//        console.log("Value of i is: " + i);
// }

// const age=21;

// age >=18 ? console.log("yes") : console.log("no")


// let number=4;
// if(number % 2 === 0){
// console.log("the number is even");
// }
// else {
// console.log("the number is odd");
// }

// const year = 2024;

// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//   console.log("it is a leap year.");
// } else {
//   console.log("it is not a leap year.");
// }
 

//    //Question 8:
//  const Time =currenttime;
//  Hour = currenttime.gethours();
// if (Hour < 12) {
//   console.log ( "Good morning!");
// } else if (Hour < 18) {
//    console.log("Good afternoon!");
// } else {
//  console.log ("Good evening!");
// }

// var currentTime = new Date();
// var currentHour = currentTime.getHours();
// var greeting;

// if (currentHour < 12) {
//   greeting = "Good morning!";
// } else if (currentHour < 18) {
//   greeting = "Good afternoon!";
// } else {
//   greeting = "Good evening!";
// }
// console.log(greeting);
// console.log(currentTime)

    //Question 5:

// const age = 10;
 
// if (age < 12) {
//  console.log("ticketPrice = 5 ") ;
// } else if ( age < 18) {
//   console.log("ticketPrice = 10");
// } else if ( age < 60) {
//  console.log(" ticketPrice = 20");
// } else {
//   console.log("ticketPrice = 15");
// }


// var score = 85;
// var grade;

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// console.log("Grade: " + grade);




// var a= 25;
// var ticketPrice;

// if (age < 12) {
//   ticketPrice = 5;
// } else if (age >= 12 && age < 18) {
//   ticketPrice = 10;
// } else if (age >= 18 && age < 60) {
//   ticketPrice = 20;
// } else {
//   ticketPrice = 15; // Senior citizen discount
// }
// console.log("Ticket Price: $" + ticketPrice);


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (;cars[i];) {
//   text += cars[i];
//   i++;
// }




// do {
//        text += "The number is " + i;
//        i++;
//      }
//      while (i < 10);
       


//      var weight = 70; // in kilograms
// var height = 1.75; // in meters
// var bmi = weight / (height * height);
// var category;

// if (bmi < 18.5) {
//   category = "Underweight";
// } else if (bmi < 24.9) {
//   category = "Normal weight";
// } else if (bmi < 29.9) {
//   category = "Overweight";
// } else {
//   category = "Obese";
// }
// console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limits the number of decimals to 2
// console.log("Category: " + category);



// var secretNumber = 7;
// var guess = 5; // The player's guess, change this to see that different code lines are executed based on the conditions
// if (guess === secretNumber) {
//   console.log("Congratulations! You guessed the correct number.");
// } else if (guess < secretNumber) {
//   console.log("Try a higher number.");
// } else {
//   console.log("Try a lower number.");
// }



// // program to display text 5 times
// const n = 5;

// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(`I love JavaScript.`);
// }

// // program to display numbers from 1 to 5
// const number = 5;

// // looping from i = 1 to 5
// // in each iteration, i is increased by 1
// for (let i = 1; i <= number; i++) {
//     console.log(i);     // printing the value of i
// }

// // program to display the sum of natural numbers
// let sum = 0;
// const num = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
// for (let i = 1; i <= num; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);



// const car = [
//        "Saab",
//        "Volvo",
//        "BMW"
//      ];


//      const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// function myFunction(p1, p2) {
//        return p1 * p2;
//      }

//      let x = myFunction(4, 3);

// function myFunction(a, b) {
// // Function returns the product of a and b
//   return a * b;
// }


// var secretNumber = 7;
// var guess = 5; // The player's guess, change this to see that different code lines are executed based on the conditions
// if (guess === secretNumber) {
//   console.log("Congratulations! You guessed the correct number.");
// } else if (guess < secretNumber) {
//   console.log("Try a higher number.");
// } else {
//   console.log("Try a lower number.");
// }
// var purchaseAmount = 120;
// var discount;

// if (purchaseAmount >= 100) {
//   discount = 20;
// } else if (purchaseAmount >= 50) {
//   discount = 10;
// } else {
//   discount = 0;
// }
// console.log("Discount: " + discount + "%");


// const button = document.getElementById("get-location-button");
// // const input = document.getElementById("city-input");
// function gotlocation(position){
//   console.log("position");
// }

//    function failedtoget(){
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = [...array1, ...array2];
// console.log(concatenatedArray);

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];
// console.log(copyArray);

// function sum(x, y, z) {
//   return x + y + z;
// }

//  const Numbers = [1, 2, 3];
//  const Result = sum(...numbers);
//  console.log(Result);//     console.log("there was some issue");
   

// button.addEventListener('click', async ()=>{
//  const result = navigator.geolocation.getCurrentPosition( gotlocation,failedtoget );
 
// });


// function showtime () {
//   const currenttime = new Date ();
//   const time = `${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()}`;
//   document.getElementById('time').innerText=time;
//   }
  
// setinterval(() => console.log('hi'),5000);


const arrayNum =['ahsan','sayyam','mohsin','bilal'];
console.log(arrayNum[3]);

// start mein add krna hai
const cars =['bmw','porsche','mercedes'];
cars.unshift('lambo');
// console.log(cars);

// end mein 2 add krna hai
const array =['nimra','saba'];
array.push('saima','mehmish');
// console.log(array);

//end sy remove 
const array1 =['ahsan','sayyam','mohsin','bilal'];
array1.pop(3);
// console.log(array1);

// start sy remove
const fruits =['mango','banana','orange']
fruits.shift(0);
console.log(fruits);

// object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);
console.log(person.firstName + " is " + person.age + " years old.");

const person1 = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person1.greet();


// Sample object
const person3 = {
  name: 'John',
  age: 30,
  gender: 'Male'
};

// Function to check if a value exists in the object
function hasValue(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

// Example usage
console.log(hasValue(person3, 'John')); // Output: true
console.log(hasValue(person3, 'Female')); // Output: false


// Existing object
let person4 = {
  name: 'John',
  age: 30,
  gender: 'Male'
};

// Deleting a property
delete person4.gender;

console.log(person4); // Output: { name: 'John', age: 30 }

