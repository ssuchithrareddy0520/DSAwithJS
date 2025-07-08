// console.log(a);
// var a = 12;  // output will be undefined

//we can still get the output even if we remove var keyword
//this is because var is hoisted to the top of the function or global scope
// a = 12;
// console.log(a);  
// output will be 12


//we can console log a before it is declared because of hoisting, but it will be undefined
//but with let and const, we cannot do that, lets take an example
// console.log(b);
// let b = 13;   // output will be ReferenceError: Cannot access 'b' before initialization

// here we will get a ReferenceError because b is not defined before it is declared
// this is because let and const are not hoisted in the same way as var


// undefined and not defined are totally different
// undefined means that the variable is declared but not initialized
// not defined means that the variable is not declared at all

// > sum of two integers


// let a = 10;
// let b = 20;
// console.log(a + b);  
// output will be 30

// > now lets talk about strings
// let a = 10;
// let b = "10";
// let c = 20;
// console.log(a + b);
// output will be 1010, because b is a string and a is a number
// console.log(a + c);
// output will be 30, because c is a number and a is a number
// observe the color of the output, it is different for string and number
// use typeof keyword to check the type of the variable
// console.log(typeof(a+b));  
// output will be string
// console.log(typeof(a+c));  
// output will be number

// > sum and message
// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20 " + a + b); 
// console.log("sum of 10 and 20 is " + (a + b));
// console.log(a+b + " is sum of 10 and 20");
// output will be "30 is sum of 10 and 20"
// observe the place of a+b 

// > type coersion
// console.log("10" + 10);
// output will be "1010" because "10" is a string and 10 is a number
// console.log("10" - 10);
// output is 0, because "10" is a string and 10 is a number, but when we subtract, the string is converted to a number
// console.log("10" * 10);
// output is 100, because "10" is a string and 10 is a number, but when we multiply, the string is converted to a number
// console.log("10" / 10);
// output is 1, because "10" is a string and 10 is a number, but when we divide, the string is converted to a number


// > Accept and print the answer

// let age = prompt("What is ur age?");
// console.log(typeof(age));  // output will be string, because prompt returns a string
// we can convert the string to a number using Number() function, which is called type conversion
// age = Number(age);
// console.log(typeof(age));  // output will be number, because we converted the string to a number
// console.log(age);

// > swap two variables via 3 methods
// method 1: using a temporary variable
// let a = 10;  
// let b = 20;
// let c = a;  //a = 10, b = 20 c = 10
// a = b;      // a = 20, b = 20, c = 10
// b = c;      // a = 20, b = 10, c = 10
// console.log("a: " + a + ", b: " + b);  // output will be a: 20, b: 10

// method 2: without using a temporary variable
// let a = 10;  
// let b = 20;
// a = a + b;     // a = 30, b = 20
// b = a - b;     // a = 30, b = 10
// a = a - b;     // a = 20, b = 10
// console.log(a, b);  // output will be 20 10

// > Operators
// Arithmetic operators
// + - * / % ++ --

// let a = 7;
// let b = 2;

// console.log(a + b);  
// console.log(a - b);
// console.log(a * b);
// console.log(a/b);
// console.log(Math.floor(a/b));
// console.log(a % b); 
// console.log(a ** b);

// Relational operators
// > < >= <= == != === !==
// console.log(10 > 20);
// console.log(10 < 20);
// console.log(10 >= 20);
// console.log(10 <= 20);
// console.log(10 =="10");
// console.log(10 === "10");
// console.log(10 != 20);
// console.log(10 !== 20);

// Logical operators
// && || !
// console.log(10 > 20 && 10 < 20);
// console.log(10 > 20 || 10 < 20);
// console.log(!(10 > 20));

// Unary operators
// ++ --
// let a = 10; 
// console.log("Intial value of a is: " + a);
// console.log("preincrementing: ++a is " + ++a);
// console.log("postincrementing: a++ is " + a++);
// console.log("postdecrementing: a-- is " + a--);
// console.log("predecrementing: --a is " + --a);
// console.log("Final value of a is: " + a);

// let i = 11;
// i = i++ + ++i;
// console.log(i); // output will be 24, because i++ returns 11 and ++i returns 13, so 11 + 13 = 24

// let b = true;
// console.log(++b); // output will be 2, because true is converted to 1 and incremented

// Ternary operator
// let num = 0;
// console.log(num>0? "positive": "Negative");

//Math functions
// console.log(Math.floor(10.5));
// console.log(Math.ceil(1.1));
// console.log(Math.round(1.4));
// console.log(Math.trunc(1.4));
// console.log(Math.pow(10, 2));
// console.log(Math.sqrt(100));
// console.log(Math.cbrt(27));
// console.log(Math.abs(-10));
// console.log(Math.min(10, 20, 30));
// console.log(Math.max(10, 20, 30));
// console.log(Math.random());


// > Math problems
// 1. area and perimeter of rectangle
// let length = 10;
// let breadth = 5;
// let area = length*breadth;
// let perimeter = 2*(length+breadth);
// console.log("Area of Reactangle is: ", area);
// console.log("Perimeter of the Rectangle is: ", perimeter);

// 2. Generate OTP of 4 digits
console.log(Math.floor(Math.random()*10000));

// 3. Area of triangle by heron's formula
let a = 3;
let b = 4;
let c = 5;
let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log("Area of Triangle is: ", area);

// 4. Circumference and area of circle
let radius = 5;
let Circumference = 2*Math.PI*radius;
let areaOfCircle = Math.PI*radius*radius;
console.log("Circumference of Circle is: ", Math.floor(Circumference));
console.log("Area of Circle is: ", Math.floor(areaOfCircle));