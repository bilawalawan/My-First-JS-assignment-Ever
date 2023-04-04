// JavaScript Programs Asssignment
// Q:1 Write a js program to find maximum between two numbers

var x =+ prompt("Enter your first number");
var y =+ prompt("Enter your second number");
if (x>y) {
    console.log("Your first value is Maximum " +x)
}
else if(y>x){
    console.log("Your second value is Maximun " +y)
  }

//   Q:2 Write a js program to find maximum between three numbers.

 var x = 60;
var y = 90;
let z = 20;
 if (x>y && x>z) {
    console.log("X is larger from Y and Z " +x)
 }
 else if (y>x && y>z) {
    console.log("Y is greater than from X and Z " +y)
 }
 else{
    console.log("Z is greater than X and Y " +z)
 } 

//  Q:3 Write a js program to check whether a number is negative, positive or zero.

 function num(a) {
    if (a>0) {
        console.log("Your Number is positive")
    }
    else if (a<0) {
        console.log("Your Number is Nagetive")
    }
    else{
        console.log("Your Number is Zero")
    }
}
 let b =+ prompt("Enter your Number");
 num(b); 

//  Q:4 Write a js program to check whether a number is divisible by 5 and 11 or not.

 function num(a) {
    if (a % 5 == 0 && a % 11 == 0 ) {
        console.log("Your Number is Divisible by 5 and 11")
    }
    else{
        console.log("your number is not divisible by 5 and 11")
    }
}

var x =+ prompt("Enter your number");
num(x); 

// Q:5 Write a js program to check whether a number is even or odd

 let w =+ prompt("Enter your number");
    if (w % 2 == 0) {
        console.log("Your number is Even");
    }
    else{
        console.log("Your Number is Odd")
    } 

// Q:6 Write a js program to check whether a year is leap year or not.

 function leap(year) {
     if (year % 4 == 0) {
         
         if (year % 100 != 0) {
             if (year % 400 == 0) {
                 
             }
         }
         console.log("This Year is Leap Year")
     }
     else{
         console.log("This Year is not Leap Year")
     }
 }
 var x =+ prompt("Enter your year");
 leap(x)

// Q:7 Write a js program to check whether a character is alphabet or not

 var ch = prompt("Enter your name")
if (ch >= 'a' && ch <= 'z') {
    
    console.log(ch+ " is Alphabet")
}
else if (ch >= 'A' && ch <= 'Z') {
    console.log(ch+ " is Alphabet")
}
else{
    console.log(ch+ " Is not alphabet")
} 

//  Q:8 Write a js program to input any character and check whether it is alphabet, digit or special character.

 let ch = prompt("Enter your value");
if (ch >= 'a' && ch <= 'z') {
    console.log(ch+ " is Alphabet")
}
else if (ch > '0' && ch < '0') {
    console.log(ch+ " is digits")
}
else{
    console.log(ch+ " is special character")
} 

// Q:9 Write a js program to input any alphabet and check whether it is vowel or consonant.
let char = prompt("enter your word")
    if (char == "a" || char == "e" || char == "i" || char == "o'" || char == "u") {
        console.log("your alphabet is Vowel");
    }
    else{
        console.log("this is normal alphabet");
    }

// Q:10 Write a JS program to check whether the a character is uppercase or lower case alphabet.
 function find(char) {
    if (char >= 'a' && char <= 'z') {
        console.log(char+ " is Your Letter lowercase")
    }
    else if (char >= 'A' && char <= 'Z') {
        console.log(char+ " is Your Letter  Uppercase")
    }
}
var a = prompt("enter your alphabet")
find(a); 

// Q:11 . Write a js program to input month number and print number of days in that month
let month = prompt("enter your month number");

switch (month) {
  case "january":
    console.log(" in January you have 31 days");
    break;
  case "february":
    console.log(" in February you have 28 days or in 29 days in leap years");
    break;
  case "march":
    console.log(" in March you have 31 days");
    break;
    case "april":
    console.log(" in April you have 30 days");
    break;
  case "may":
    console.log(" in May you have 31 days");
    break;
  case "june":
    console.log(" in June you have 30 days");
    break;
    case "july":
    console.log(" in July you have 31 days");
    break;
  case "august":
    console.log(" in August you have 31 days");
    break;
  case "october":
    console.log(" in October you have 30 days");
    break;
    case "September":
    console.log(" in September you have 31 days");
    break;
  case "november":
    console.log(" in November you have 30 days");
    break;
  case "december":
    console.log(" in December you have 31 days");
    break;
  default:
    console.log("you have not enter correct month");
}

// Q:12 Write a js program to input week number and print week day
let week =+ prompt("enter week number");
console.log("We have 4 weeks in a month so enter your week number");
switch (week) {
    case 1:
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunda");
        break;
    case 2:
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunda");
        break;
    case 3:
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunda");
        break;
    case 4:
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunda");
        break;
    default:
        break;
}


// Q:13 Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade.
function grade(a, b, c, d, e) {
    var get = a + b + c + d + e;
    let total = 500;
    let per = (get / total) * 100;
    console.log("Your Percentage is " +per+ "%");
    let score = parseInt(per);

switch (true) {
  case (score >= 90 && score <= 100):
    console.log("Your grade is A");
    break;
  case (score >= 80 && score < 90):
    console.log("Your grade is B");
    break;
  case (score >= 70 && score < 80):
    console.log("Your grade is C");
    break;
  case (score >= 60 && score < 70):
    console.log("Your grade is D");
    break;
  case (score >= 0 && score < 60):
    console.log("Your grade is F");
    break;
  default:
    console.log("Invalid score entered.");
}
}
let che =+ prompt("Enter your chemistry number");
let phy =+ prompt("Enter your Physic number");
let math =+ prompt("Enter your Math number");
let com =+ prompt("Enter your Computer number");
let eng =+ prompt("Enter your English number");
grade(che, phy, math, com, eng)


// Q:14 Write a js program to input basic salary of an employee and calculate its Gross salary 
let basicSalary = + prompt("Enter your Basic Salary");
switch (true) {
    case (basicSalary <= 10000):
        var HRA = 0.2 * basicSalary;
        var DA = 0.8 * basicSalary;
        var grossSalary = basicSalary + HRA + DA;
        console.log("your Gross Salary is " + grossSalary);
        break;
    case (basicSalary >= 10000 && basicSalary <= 20000):
        var HRA = 0.25 * basicSalary;
        var DA = 0.9 * basicSalary;
        var grossSalary = basicSalary + HRA + DA;
        console.log("your Gross Salary is " + grossSalary);
        break;
    case (basicSalary > 20000):
        var HRA = 0.3 * basicSalary;
        var DA = 0.95 * basicSalary;
        var grossSalary = basicSalary + HRA + DA;
        console.log("your Gross Salary is " + grossSalary);
        break;
    default:
        break;
}

// Q:15 Write a js program to input electricity unit charges and calculate total electricity bill.
function bill(a) {
    if (a <= 50) {
        var result = a * 0.50;
        console.log("Your bill is " +result)
        return result;
    }
    else if (a > 50 && a <= 100) {
        var result = a * 0.75;
        console.log("Your Bill is " +result);
        return result;
    }
    else if (a > 100 && a <=250) {
        var result = a * 1.20;
        console.log("Your Bill is " +result);
        return result;
    }
    else if (a > 250) {
        var result = a * 1.50;
        console.log("Your Bill is " +result);
        return result
    }
}
var x =+ prompt("enter your used unit");
let result1 = 0.2 * bill(x);
var result2 = result1 + bill(x);
console.log("Your current bill is " +result2);

// Q:16 Write a js program to calculate profit or loss.
function cal(a, b) {
    if (a < b) {
        var PL = a - b;
        console.log("Your Are in profit " +PL)
    }
    else if (a > b) {
        var PL = b - a;
        console.log("Your are in loss " +PL);
    }
    else{
        console.log("Your are in balance")
    }
}
let sellingPrice =+ prompt("Enter your Selling Price")
let costPrice =+ prompt("Enter your cost price")
cal(sellingPrice, costPrice)