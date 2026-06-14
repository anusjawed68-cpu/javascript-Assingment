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


// chapter 14-16 "Arrays"

// Task 1
// var studentNames = [];

// // Task 2
// var studentNames = new Array();

//Task 3
// var stringArray = ["Anus", "Jawed", "Ali"];

// Task 4
// var numberArray = [1, 2, 3, 4, 5];

// Task 5
// var booleanArray = [true, false, true, false];

// Task 6
// var mixedArray = ["Anus", 19, true, "Student"];

// Task 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln("<h1>Qualifications</h1><br><br>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
// }

// Task 8
// var studentNames = ["Anus", "Jawed", "Ali"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     document.writeln(studentNames[i] + " scored " + studentScores[i] + " out of " + totalMarks + " (" + percentage.toFixed(2) + "%)<br>");
// }

// Task 9
// var colorNames = ["Red", "Green", "Blue"];
// var userColor = prompt("Enter a color to add to the beginning of the array:");
// colorNames.unshift(userColor);
// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorEnd = prompt("Enter a color to add to the end of the array:");
// colorNames.push(userColorEnd);
// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorStart = prompt("Enter a color to add to the beginning of the array:");
// colorNames.unshift(userColorStart);
// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorDelete = prompt("Enter a color to delete from the beginning of the array:");
// colorNames.shift(userColorDelete);
// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorDeleteEnd = prompt("Enter a color to delete from the end of the array:");
// colorNames.pop(userColorDeleteEnd);
// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorIndex = +prompt("Enter the index to add a color:");
// var userColorAtIndex = prompt("Enter a color to add at index " + userColorIndex + ":");
// colorNames.splice(userColorIndex, 0, userColorAtIndex);

// document.writeln("Updated Array: " + colorNames + "<br>");
// var userColorDeleteIndex = +prompt("Enter the index to delete a color:");
// var userColorDeleteCount = +prompt("Enter the number of colors to delete from index " + userColorDeleteIndex + ":");
// colorNames.splice(userColorDeleteIndex, userColorDeleteCount);
// document.writeln("Updated Array: " + colorNames + "<br>");

// // Task 10
// var studentScores = [320, 230, 480, 120];
// document.writeln("Scores of Students: " + studentScores + "<br>");
// studentScores.sort(function(a, b) {
//     return b - a;
// });
// document.writeln("Sorted Scores: " + studentScores + "<br>");   

// Task 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.writeln("Cities List: " + cities + "<br>");
// var selectedCities = cities.slice(2, 4);
// document.writeln("Selected Cities List: " + selectedCities + "<br>");

// Task 12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.writeln("Array: " + arr + "<br>");
// document.writeln("String: " + singleString + "<br>");

// Task 13
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.writeln("Devices: " + devices + "<br>");
// for (var i = 0; i < devices.length; i++) {
//     document.writeln("Out: " + devices[i] + "<br>");
// }   

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.writeln(`<h1>Devices :<br/> ${devices} <br/> <br/>`);
// devices.reverse()
// for(var i = 0; i< devices.length;i++){
// document.writeln(`Out : <br/>${devices[i]} <br/><h1/>`)
// }

// var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
//     document.writeln(`<select>`)
// for(var i = 0;i<manufacturers.length;i++){
//     document.writeln(`<option>${manufacturers[i]}</option>`)
// }document.writeln(`</select>`)

// Chapter 17 To 20

// Task 1
// var arr [
//     []
// ]

// Task 2
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var i = 0;i<arr.length;i++){
// document.writeln(`<h1>${arr[i]}</br> </h1>`)
// }

// Task 3
// for(var i = 1;i<=10;i++){
//     document.writeln(`<h1> ${i} <br/></h1>`)
// }

// Task 4
// var input = +prompt("Enter a Number to show its Multiplication Table");
// var input1 = +prompt("Enter The Length Of Table");
// for(var i = 1;i<=input1;i++){
//     document.writeln(`${input} x ${i} = ${input*i} <br/>`)
// }

// Task 5
// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"];
//  for(var i = 0;i<fruits.length;i++){
//     document.writeln(`<h1>${fruits[i]} </br>`)
//  }
// for(var i = 0;i<fruits.length;i++){
//     document.writeln(`Element At Index ${i} is :${fruits[i]}</br>`)

// }

// Task 6
// document.writeln(`<h1>Counting :</h1>`)
// for(var i = 1;i<=15;i++){
//     document.writeln(`${i},`)
// }

// document.writeln(`<h1></br>Reverse Counting :</h1>`)
// for(var i = 10;i>=1;i--){
//     document.writeln(`${i},`)
// }

// document.writeln(`</br><h1>Even : </h1>`)
// for(var i = 0;i<=20;i=i+2){
//     document.writeln(`${i},`)
// }

// document.writeln(`</br><h1>Odd : </h1>`)
// for(var i = 1;i<=20;i=i+2){
//     document.writeln(`${i},`)
// }

// document.writeln(`</br><h1>Series : </h1>`)
// for(var i = 2;i<=20;i=i+2){
//     document.writeln(`${i}k,`)
// }

// Task 7
// var items = ["cake","apple pie","cookie","chips","patties"]
// var input = prompt("Welcome To Abc Bakery What Do you Want To Order Sir/Ma'am")
// var available = false
// for(var i = 0;i<items.length;i++){
// if(input==items[i]){
//     available=true
// document.writeln(`${input} is AvailAble at index ${i} in our bakery`)
// }
// }
// if (available==false) {
//     document.writeln(`${input} is Not AvailAble in our bakery`)
// }

// Task 8
// var arr = [24,53,78,91,12]
// var largest = 0
// for(var i = 0;i<arr.length;i++){
//     if (largest < arr[i]) {
//         largest = arr[i]
//     }
// }
// document.writeln(`Array Items ${arr}</br>`)
// document.writeln(`Largest Number is : ${largest}</br>`);

// var arr = [24,53,78,91,12]
// var smallest = arr[0]
// for(var i = 0;i<arr.length;i++){
//     if (arr[i] < smallest) {
//         smallest = arr[i]
//     }
// }
// document.writeln(`</br></br>Array Items ${arr}</br>`)
// document.writeln(`Smallest Number is : ${smallest}</br>`)

// Task 9
// for(var i = 5;i<=100;i=i+5){
// console.log(i);
// }

// Chapter 21-25 "Strings Methods"

//  Task 1

// var firstName = prompt("Enter Your First Name ")
// var lastName = prompt("Enter Your Last Name ")
// alert(`Full Name is : ${firstName} ${lastName}`)

// Task 2

// var mobiles = prompt("Enter Your Favorite Mobile Phone Name")
// var length = mobiles.length;
// alert(`My favorite Mobile is ${mobiles} \n Length of String is ${length}`)

// Task 3

// var country = "Pakistan";
// var indexNumber = country.indexOf("n")
// alert(`String ${country} \n Index of 'n' ${indexNumber}`)

// Task 4

// var word = "Hello World";
// var index = word.lastIndexOf("l")
// alert(`Sting : ${word} \n Last index of "L" : ${index}`)

// Task 5
// var string = "Pakistan";
// alert(`String ${string}\n Character At Index 3 : ${string.charAt(3)}`)

// Task 6

// var firstName = prompt("Enter Your First Name ")
// var lastName = prompt("Enter Your Last Name ")
// var fullName = firstName.concat(lastName)
// alert(`Full Name is : ${fullName}`)

// Task 7
// var city = "HyderAbad";
// var replace = city.replace("Hyder","Islam") 
// console.log(`City : ${city} \n After Replacement : ${replace}`)

// Task 8 
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replaceAll("and","&")
// alert(`Before Replace : ${message}\n After Replace : ${replace}`)

// Task 9
// var string = "472"
// alert(`Value : ${string} \n Type : ${typeof string}`);
// var number = Number(string)
// alert(`Value : ${number} \n Type : ${typeof number}`);

// Task 10

// var userInput = prompt("Enter Some Text To Convert It Into Upper Case");
// var upperCase = userInput.toUpperCase();
// alert(`User Input : ${userInput} \n Upper Case : ${upperCase}`);

// Task 11

// var userInput = prompt("Enter Some Text To Convert It Into Upper Case");
// var upperCase = userInput.toCapitalize();
// alert(`User Input : ${userInput} \n Upper Case : ${upperCase}`);

// Task 12

// var userInput = prompt("Enter a word:");
//       var titleCaseInput =
//         userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

//       document.write(
//         "User input: " + userInput + "<br>Title case: " + titleCaseInput,
//       );

// Chapter 26 to 30

// Task 1

// var userInput = +prompt("Enter Only Integer Number")
// if (userInput < 0) {
//     alert(`Enter Number Greater Than 0`)
// }else{
//     var roundOff = Math.round(userInput)
//     var floorVal = Math.floor(userInput)
//     var ceilVal = Math.ceil(userInput);
//     document.writeln(`<h1>
//         Number : ${userInput} </br>
//         Round Off : ${roundOff} </br>
//         Floor Value : ${floorVal} </br>
//         Ceil Value : ${ceilVal} </br>
//         </h1>`
//     )
// }

// Task 2

// var userInput = parseFloat(prompt("Enter Only Integer Number"))
// if (userInput > 0) {
//     alert(`Enter Number less Than 0`)
// }
// else{
//     var roundOff = Math.round(userInput)
//     var floorVal = Math.floor(userInput)
//     var ceilVal = Math.ceil(userInput);
//     document.writeln(`<h1>
//         Number : ${userInput} </br>
//         Round Off : ${roundOff} </br>
//         Floor Value : ${floorVal} </br>
//         Ceil Value : ${ceilVal} </br>
//         </h1>`
//     )
// }

// Task 3

// var userInput = +prompt("Enter Any Number To Find Its Absolute Value")
// var absoluteValue = Math.abs(userInput)
// alert(`The Absolute Value Of ${userInput} Is : ${absoluteValue}`)


// Task 4

// var randomDice = Math.floor(Math.random() * 6) + 1;
// alert(`Random Dice Value : ${randomDice}`)

// Task 5

// var randomCoin = Math.floor(Math.random() * 2) + 1;
// if (randomCoin === 1) {
//     alert(`Random Coin Value : Heads`)
// } else {
//     alert(`Random Coin Value : Tails`)
// }

// Task 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// alert(`Random Number Between 1 And 100 : ${randomNumber}`)

// Chapter 31 to 34

// Task 1

// var currentDate = new Date();
// document.writeln(`Current Date : ${currentDate}`)

// Task 2

// var currentMonth = new Date().getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(`Current Month : ${monthNames[currentMonth]}`)

// Task 3

// var currentDay = new Date().getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert(`Today Is : ${dayNames[currentDay]}`)

// Task 4

// var currentDay = new Date().getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// if (currentDay === 0 || currentDay === 6) {
//     alert(`It's Fun Day`)
// } else {
//     alert(`It's Working Day`)
// }

// Task 5

// var currentDate = new Date().getDate();  
// if (currentDate < 16) {
//     alert(`First Fifteen Days Of The Month`)
// } else {
//     alert(`Last Days Of The Month`)
// }

// Task 6

// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var currentHours = currentDate.getHours();
// if (currentHours < 12) {
//     alert(`It's AM`)
// } else {
//     alert(`It's PM`)
// }

// Task 7

// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var referenceDate = new Date("January 1, 1970");
// var referenceTime = referenceDate.getTime();
// var elapsedTime = currentTime - referenceTime;
// var elapsedSeconds = Math.floor(elapsedTime / 1000);
// var elapsedMinutes = Math.floor(elapsedTime / (1000 * 60));
// var elapsedHours = Math.floor(elapsedTime / (1000 * 60 * 60));
// alert(`Elapsed milliseconds since January 1, 1970: ${elapsedTime}\nElapsed seconds since January 1, 1970: ${elapsedSeconds}\nElapsed minutes since January 1, 1970: ${elapsedMinutes}\nElapsed hours since January 1, 1970: ${elapsedHours}`);

// Task 8

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var currentSeconds = currentDate.getSeconds();
// var currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
// alert(`Current Time : ${currentTime}`)

// Task 9

// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var pastYear = +prompt("Enter A Year To Check If It's A Leap Year Or Not")
// if ((pastYear % 4 === 0 && pastYear % 100 !== 0) || (pastYear % 400 === 0)) {
//     alert(`${pastYear} is a leap year.`);
// } else {
//     alert(`${pastYear} is not a leap year.`);
// }

// Task 10

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonthName = monthNames[currentMonth]; 
// var currentYear = currentDate.getFullYear();
// var pastMonth = prompt("Enter A Month To Check Number Of Days In It")
// var daysInMonth;
// if (pastMonth.toLowerCase() === "february") {
//     if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
//         daysInMonth = 29;
//     } else {
//         daysInMonth = 28;
//     }
// } else if (["january", "march", "may", "july", "august", "october", "december"].includes(pastMonth.toLowerCase())) {
//     daysInMonth = 31;
// } else if (["april", "june", "september", "november"].includes(pastMonth.toLowerCase())) {
//     daysInMonth = 30;
// } else {
//     alert("Invalid month name");
// }

// if (daysInMonth) {
//     alert(`Number of days in ${pastMonth} ${currentYear} is: ${daysInMonth}`);
// }

// Task 11

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var currentSeconds = currentDate.getSeconds();
// var currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
// alert(`Current Time : ${currentTime}`)
// var pastHours = +prompt("Enter Hours To Set Time Backwards")
// var pastMinutes = +prompt("Enter Minutes To Set Time Backwards")
// var pastSeconds = +prompt("Enter Seconds To Set Time Backwards")
// var pastTime = new Date(currentDate.getTime() - (pastHours * 60 * 60 * 1000) - (pastMinutes * 60 * 1000) - (pastSeconds * 1000));
// var pastHours = pastTime.getHours();
// var pastMinutes = pastTime.getMinutes();
// var pastSeconds = pastTime.getSeconds();
// var pastTimeFormatted = `${pastHours}:${pastMinutes}:${pastSeconds}`;
// alert(`Past Time : ${pastTimeFormatted}`)

// Task 12

// var date = new Date() 
// alert(date)
// date.setFullYear(date.getFullYear() - 100)
// alert(date)

// Task 13

// var userInput = +prompt("Enter Your Age : ");
// alert(`Your Age is ${userInput}`)
// var date = new Date()
// var brdCal = date.getFullYear() - userInput
// alert(`Your Birth Year Is : ${brdCal}`)










