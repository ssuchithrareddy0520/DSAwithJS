// Valid voter
// let age = Number(prompt("What is your age?"));
// console.log(age);
// if (isNaN(age)) {
//     console.log("Please enter a valid number");
// }
// else if (age >= 18){
//     console.log("You are eligible to vote");
// }
// else {
//     console.log("You are not eligible to vote");
// }

//Shop Discount
// let dis = 0;
// let bill = prompt("What is the final bill?");
// if (bill > 0 && bill <= 5000) {
//     dis = 0
// }
// else if (bill > 5000 && bill <= 7000){
//    dis = 5
// }
// else if (bill > 7000 && bill <= 9000){
//     dis = 10
// }
// else if (bill > 9000){
//     dis = 20
// }
// console.log(bill - Math.floor((bill * dis )/ 100));

// > INR Denomination

// let  amount = Number(prompt("Enter the amount in INR:"));
// if (isNaN(amount) || amount <= 0) {
//     console.log("Please enter a valid positive number");
// }
// if (amount >= 500 ){
//     console.log("500 notes: " + Math.floor(amount/500));
//     amount = amount % 500;
// }
// if (amount >= 200 ){
//     console.log("200 notes: " + Math.floor(amount/200));
//     amount = amount % 200;
// }
// if (amount >= 100 ){
//     console.log("100 notes: " + Math.floor(amount/100));
//     amount = amount % 100;
// }
// if (amount >= 50 ){
//     console.log("50 notes: " + Math.floor(amount/50));
//     amount = amount % 50;
// }
// if (amount >= 20 ){
//     console.log("20 notes: " + Math.floor(amount/20));
//     amount = amount % 20;
// }
// if (amount >= 10 ){
//     console.log("10 notes: " + Math.floor(amount/10));
//     amount = amount % 10;
// }
// if (amount >= 5 ){
//     console.log("5 notes: " + Math.floor(amount/5));
//     amount = amount % 5;
// }
// if (amount >= 4 ){
//     console.log("4 notes: " + Math.floor(amount/4));
//     amount = amount % 4;
// }
// if (amount >= 3 ){
//     console.log("3 notes: " + Math.floor(amount/3));
//     amount = amount % 3;
// }
// if (amount >= 2 ){
//     console.log("2 notes: " + Math.floor(amount/2));
//     amount = amount % 2;
// }
// if (amount == 1 ){
//     console.log("1 notes: " + amount);
// }

//Switch Case
let day = Number(prompt("Enter a number from (1-7)"));

switch(day){
    case 1:  console.log("Today is Monday");
                    break;
    case 2: console.log("Today is Tuesday");
                    break;
    case 3: console.log("Today is Wednesday");
                    break;
    case 4: console.log("Today is Thursday");
                    break;
    case 5: console.log("Today is Friday");
                    break;
    case 6: console.log("Today is Saturday");
                    break;
    case 7: console.log("Today is Sunday");
                    break;
    default: console.log("Please enter a valid day number (1-7)");
}

