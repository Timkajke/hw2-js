// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–12), подростком (12–18), взрослым
// (18-60) или пенсионером (60– ...).

/* var age = prompt("Enter your age to find out who you are");
if (age <= 12) {
    alert(`Hey, your age is ${age}. You are a child!`);
}
else if (age > 12 && age <=18) {
    alert(`Hey, your age is ${age}. You are a teenager!`);
}
else if (age > 18 && age <=60) {
    alert(`Hey, your age is ${age}. You are an adult!`);
}
else {
    alert(`Hey, your age is ${age}. You are a pensioner!`);
} */

// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

/* var digit = +prompt("Enter digit to find out what symbol it is");
switch (digit) {
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    case 0:
        console.log(")");
        break;
    default:
        console.log("Oops! Something went wrong! Use right digit!");
        break;
} */

// Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

/* var number = +prompt("Enter three-digit number to find out does it have repeatable digits");
var firstDigit = number % 10;
var remainingNumber = (number - firstDigit) / 10;
var secondDigit = remainingNumber % 10;
var thirdDigit = (remainingNumber - secondDigit) / 10;
if (firstDigit === secondDigit) {
    console.log(`Yeah! Repeatable digit is ${firstDigit}!`);
}
else if (secondDigit === thirdDigit) {
    console.log(`Yeah! Repeatable digit is ${secondDigit}!`);
}
else if (firstDigit === thirdDigit) {
    console.log(`Yeah! Repeatable digit is ${thirdDigit}!`);
}
else {
    console.log("Your number doesn't have repeatable digits")
} */

// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.

/* var year = +prompt("Enter year to find out does it leap year or not");
((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 
alert(`Hey, your year is ${year} and it IS a leap year`) :
alert(`Hey, your year is ${year} and it is NOT a leap year`) */

// Запросить у пользователя пятиразрядное число и определить,
// является ли оно палиндромом.

/* var number = +prompt("Enter five-digit number to find out is it palindrome or not");
var firstDigit = number % 10;
var remainingNumber = (number - firstDigit) / 10;
var secondDigit = remainingNumber % 10;
var remainingNumber2 = (remainingNumber - secondDigit) / 10;
var thirdDigit = remainingNumber2 % 10;
var remainingNumber3 = (remainingNumber2 - thirdDigit) / 10;
var fourthDigit = remainingNumber3 % 10;
var fifthDigit = (remainingNumber3 - fourthDigit) / 10;

var oneNumber = (firstDigit * 100) + (secondDigit * 10) + thirdDigit;
var twoNumber = (fifthDigit * 100) + (fourthDigit * 10) + thirdDigit;

(oneNumber === twoNumber) ? alert("IT IS PALINDROME") : alert("IT IS NOT PALINDROME") */