// // Chapter 1 "Alerts"

// // Task 1
// alert("Anus jawed \nError! Please enter a valid password.");

// // Task 2
// alert("Anus jawed\nWelcome to JS Land...\nHappy Coding!");  

// // Task 3
// alert("Anus jawed\nWelcome to JS Land...");
// alert("Anus jawed\nHappy Coding!");

// // Task 4
// alert("Anus jawed\nHello... I can run JS through my web browser's console");

// // Chapter 2 "Variables for Strings"

// // Task 1
// var username = "Anus\n";
// var age = "19 years old\n";
// var course = "Certified Mobile Application Development\n";
// alert(username);
// alert(age);
// alert(course);

// // Task 2
//  alert("PIZZA\nPIZZ\nPIZ\nPI\nP"); 

// // Task 3
// var email = "anus@example.com\n";
// alert(email);

// // Task 4
// var book = "I am Trying to Learn From The Book \nA smarter way to learn JavaScript";
// alert(book);

// // Task 5
// document.writeln("Yah! I can write HTML content through JavaScript");

// // task 6  
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// // Chapter 3 "Variables for Numbers"

// // Task 1
// var age = 19;
// alert("I am " + age + " years old");

// Task 2
// var visit = 14;
// alert("You have visited this site " + visit + " times");

// Task 3
// var birthYear = 2006;
// document.writeln("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is : "+typeof(birthYear));

// Task 4
// var visitorName = "Anus";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + "(s) on AJ Clothing store");

// // Chapter 4 "Variable Names: Legal & Illegal"

// // Task 1
// var name, age, course; 

// // Task 2
// // Legal variable names
// // var myName, age2, course_title, $price, _quantity, myName2;

// // Task 3
// Ilegal variable names
// // var 2name; 
// // var my-name;  
// // var my name;
// // var 9name; 
// // var my name;

// // Task 4
// document.writeln("<h1>Rules for naming JS variables</h1><br><br>");
// document.writeln("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>"); 
// document.writeln("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
// document.writeln("Variable names are case sensitive<br>");
// document.writeln("Variable names should not be JS keywords");

// // chapter 5 "Math Expressions"

// // Task 1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum);

// // Task 2
// var num1 = 3;
// var num2 = 5;    
// var difference = num1 - num2;
// var product = num1 * num2;
// var quotient = num1 / num2;
// var modulus = num1 % num2;
// document.writeln("The difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
// document.writeln("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
// document.writeln("The quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
// document.writeln("The modulus of " + num1 + " and " + num2 + " is " + modulus);

// // Task 3
// var num;
// document.writeln("Value after variable declaration is: " + num + "<br>");    
// num = 5;
// document.writeln("Initial value: " + num + "<br>");    
// num++;
// document.writeln("Value after increment is: " + num + "<br>");    
// num += 7;
// document.writeln("Value after addition is: " + num + "<br>");
// num--;
// document.writeln("Value after decrement is: " + num + "<br>");
// var remainder = num % 3;
// document.writeln("The remainder is: " + remainder);

// // Task 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// // Task 5
// var num = 4;
// document.writeln("Table of " + num + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
// }

// // Task 6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln("The temperature in Fahrenheit is: " + fahrenheit + "°F");
// var fahrenheit = 70;
// var celsius = (fahrenheit - 32) * 5/9;
// document.writeln("The temperature in Celsius is: " + celsius + "°C");

// // Task 7
// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.writeln("<h1>Shopping Cart</h1><br><br>");
// document.writeln("Price of item 1 is " + item1Price + " PKR<br>");
// document.writeln("Quantity of item 1 is " + item1Quantity + "<br>");
// document.writeln("Price of item 2 is " + item2Price + " PKR<br>");
// document.writeln("Quantity of item 2 is " + item2Quantity + "<br>");
// document.writeln("Shipping Charges " + shippingCharges + " PKR<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR");

// // Task 8  
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1><br><br>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(2) + "%");

// // Task 9
// var usDollar = 10;
// var saudiRiyal = 25;
// var pkrPerDollar = 278.51;
// var pkrPerRiyal = 74.33;
// var totalPkr = (usDollar * pkrPerDollar) + (saudiRiyal * pkrPerRiyal);
// document.writeln("<h1>Currency in PKR</h1><br><br>");
// document.writeln("Total Currency in PKR: " + totalPkr + " PKR");

// // Task 10
// var num = 5;
// var result = ((num + 5) * 10) / 2;
// document.writeln("The result of the expression is: " + result);

// // Task 11 
// var currentYear = new Date().getFullYear();
// var birthYear = 2006;
// var age = currentYear - birthYear;
// document.writeln("<h1>Age Calculator</h1><br><br>");
// document.writeln("Current Year: " + currentYear + "<br>");
// document.writeln("Birth Year: " + birthYear + "<br>");
// document.writeln("Your age is: " + age);

// // Task 12  
// // var radius = 20;
// // var circumference = 2 * Math.PI * radius;
// // var area = Math.PI * Math.pow(radius, 2);
// // document.writeln("<h1>Circle Calculator</h1><br><br>");
// // document.writeln("Radius: " + radius + "<br>");
// // document.writeln("Circumference: " + circumference + "<br>");
// // document.writeln("Area: " + area + "<br>");

// // Task 13
// // var favoriteSnack = "biscuits";
// // var currentAge = 19; 
// // var maxAge = 80;
// // var amountPerDay = 3;
// // var totalSnacks = (maxAge - currentAge) * amountPerDay * 365;
// // document.writeln("<h1>The Lifetime Supply Calculator</h1><br><br>");
// // document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
// // document.writeln("Current Age: " + currentAge + "<br>");
// // document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
// // document.writeln("Amount of snacks per day: " + amountPerDay + "<br>");
// // document.writeln("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);

// Chapter 9-11 "User Input & Conditional Statements";

// Task 1
// var city = prompt("Enter your city name:");
// if (city.toLowerCase() == "karachi") {
//     alert("Welcome to the city of lights!");
// };

// Task 2
// var gender = prompt("Enter Your Gender")
// if (gender.toLowerCase() == "male") {
//     alert("Good Morning Sir !")
// }else if (gender.toLowerCase() == "female"){
//     alert("Good Morning Ma'am !")
// }else{
//     alert("Transgender")
// }

// Task 3
// var tarfficSignal = prompt("Enter Traffic Signal")
// if (tarfficSignal.toLowerCase() == "red") {
//     alert("Must Stop");
// } else if(tarfficSignal.toLowerCase() == "yellow") {
//      alert("Ready to move");
// }else if(tarfficSignal.toLowerCase() == "green") {
//      alert("Move now");
// }

// Task 4
///////////// A ///////////////////////////////
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
///////////// B ///////////////////////////////
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//////////// C /////////////////////////////////
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
/////////// D //////////////////////////////////
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
////////// E //////////////////////////////////
// if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }
//////// F //////////////////////////////////
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }


// Task 5
// var sub1 = +prompt("Enter marks obtained in Subject 1:");
// var sub2 = +prompt("Enter marks obtained in Subject 2:");
// var sub3 = +prompt("Enter marks obtained in Subject 3:");
// var totalMarks = 300;
// var marksObtained = sub1 + sub2 + sub3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.writeln("<h1>Marks Sheet</h1><br><br>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(0) + "%<br>");
// document.writeln("Grade: " + grade + "<br>");
// document.writeln("Remarks: " + remarks);

// Task 6
// var input = +prompt("Check if the number is divisible by 3:");
// if (input % 3 === 0) {
//     alert(input + " is divisible by 3.");
// } else {
//     alert(input + " is not divisible by 3.");
// }

// Task 7
// var input = +prompt("Check if the number is even or odd:");
// if (input % 2 === 0) {
//     alert(input + " is an even number.");
// } else {
//     alert(input + " is an odd number.");
// }

// Task 8
// var temperature = +prompt("Enter the temperature:");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }

// Task 9
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operation = prompt("Enter operation (+, -, *, /):");
// var result;
// if (operation === "+") { 
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else {
//     alert("Invalid operation");
// }
// alert("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);

// Chapter 12-13 "If…Else & Else If Statements, Testing Set of Conditions"

// Task 1
// var number1 = +prompt("Enter Number 1");
// if (!number1) {
//     alert("You Have To give Some Numbers")
// }else if (number1 < 0) {
//     alert("give Only Integers")
// }else{
//     var number2 = +prompt("Enter Number 2")
//     if (!number2) {
//     alert("You Have To give Some Numbers")
// }else if (number2 < 0) {
//     alert("give Only Integers")
// }else if (number1 > number2){
//   alert("Number 1 Is Greater")
// }else if(number2 > number1){
//   alert("Number 2 Is Greater")
// }else if (number1 == number2){
// alert("Number 1 And Number 2 are Equal")
// }else{
//     alert("System Error")
// }
// }

// Task 2
// var userInput = +prompt("Enter Number To Check Positive Or Negative");
// if (isNaN(userInput)) {
//     alert("Give Only Numbers")
// }else if (userInput < 0){
// alert("The Number Is Negaitve")
// }else if (userInput > 0){
// alert("The Number Is Positive")
// }else{
// alert("The Given Value Is 0")
// }

// Task 3
// var userInput = prompt("Enter Value To Check Value is Vowel or Consonent");
// var vowel = ["a","e","i","o","u"];
// if (!isNaN(userInput)) {
//     alert("Numbers And Emty Value Are  Not Allowed")
// } else if (userInput.length > 1){
//     alert("You Can't Give More Than One Aplhabet")
// }else if (userInput.toLowerCase() == "a" || userInput.toLowerCase() == "e" || userInput.toLowerCase() == "i" || userInput.toLowerCase() == "o" || userInput.toLowerCase() == "u"){
//     alert(`The Given Alphabet ${userInput} Is Vowel`)
// }else{
//     alert(`The Given Alphabet ${userInput} Is Consonent`)
// }


// Task 4
// var correctPassword = 888;
// var userInput = +prompt("Enter Your Password");
// if (userInput == "") {
//     alert("Please enter your password")
// } else if (userInput == correctPassword){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Password")
// }



