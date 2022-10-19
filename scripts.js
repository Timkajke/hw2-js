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

// Написать конвертор валют. Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

/* var dollar = +prompt("Enter dollars which do you want to convert");
var currency = +prompt("If you want to convert in EUR Press 1\nIf you want to convert in UAN Press 2\nIf you want to convert in AZN Press 3");
switch (currency) {
    case 1:
        var dollarToEur = dollar * 1.03;
        alert(`Hey, you'll get ${dollarToEur} EUR`);
        break;
    case 2:
        var dollarToUan = dollar * 7.72;
        alert(`Hey, you'll get ${dollarToUan} UAN`);
        break;
    case 3:
        var dollarToAzn = dollar * 1.7;
        alert(`Hey, you'll get ${dollarToAzn} AZN`);
        break;
    default:
        alert(`Hey, use right digit to convert your dollars!`);
        break;
} */

// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

/* var amountOfBuy = +prompt("Enter how much money do you want to spend");
var amountOfBuyWithDiscount;
var discount;
if (amountOfBuy > 0 && amountOfBuy < 200) {
    alert (`Hey, you have to pay ${amountOfBuy} dollars`);
}
else if (amountOfBuy >= 200 && amountOfBuy < 300) {
    discount = amountOfBuy * 0.03;
    amountOfBuyWithDiscount = amountOfBuy - discount;
    alert (`Hey, you have to pay ${amountOfBuyWithDiscount} dollars`);
}
else if (amountOfBuy >= 300 && amountOfBuy < 500) {
    discount = amountOfBuy * 0.05;
    amountOfBuyWithDiscount = amountOfBuy - discount;
    alert (`Hey, you have to pay ${amountOfBuyWithDiscount} dollars`);
}
else if (amountOfBuy >= 500) {
    discount = amountOfBuy * 0.07;
    amountOfBuyWithDiscount = amountOfBuy - discount;
    alert (`Hey, you have to pay ${amountOfBuyWithDiscount} dollars`);
}
else {
    alert('Hey, you need to use POSITIVE amount of buy');
} */

// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.

/* var lengthOfCircle = +prompt("Enter length of cirlce");
var perimetrOfSquare = +prompt("Enter perimetr of square");
var lengthOfSquare = perimetrOfSquare / 4;
var diametrOfCircle = lengthOfCircle / Math.PI;
diametrOfCircle <= lengthOfSquare ? alert("You can put circle into square") :
    alert("You CAN'T put circle into square"); */

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

/* var questionNumOne = +prompt("Какой континент имеет наибольшую площадь?\n1 - Евразия\n2 - Африка\n3 - Австралия");
var quantityOfPoints = 0;
switch (questionNumOne) {
    case 1: quantityOfPoints += 2;
        break;
    case 2: quantityOfPoints += 0;
        break;
    case 3: quantityOfPoints += 0;
        break;
    default:
        alert("I DONT UNDERSTAND YOU HUMAN!");
        quantityOfPoints += 0;
        break;
}
var questionNumTwo = +prompt("В каком году В.В. Путин впервые вступил на должность президента РФ?\n1 - 2001\n2 - 2002\n3 - 2000");
switch (questionNumTwo) {
    case 1: quantityOfPoints += 0;
        break;
    case 2: quantityOfPoints += 0;
        break;
    case 3: quantityOfPoints += 2;
        break;
    default:
        alert("I DONT UNDERSTAND YOU HUMAN!");
        quantityOfPoints += 0;
        break;
}
var questionNumThree = +prompt("Численность Китая в 2022 году?\n1 - 1 459 000 000\n2 - 1 500 000 000\n3 - 1 651 000 000");
switch (questionNumThree) {
    case 1: quantityOfPoints += 2;
        break;
    case 2: quantityOfPoints += 0;
        break;
    case 3: quantityOfPoints += 0;
        break;
    default:
        alert("I DONT UNDERSTAND YOU HUMAN!");
        quantityOfPoints += 0;
        break;
}
alert(`Hey, you've got ${quantityOfPoints} points!`); */

// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.

var day = +prompt("Enter day");
var month = +prompt("Enter month");
var year = +prompt("Enter year");
var correct = false;
if (month > 0 && month <= 12) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day <= 31)
                correct = true;
            break;
        case 2:
            if ((day <= 29 && year % 4 == 0) || (day <= 28 && year % 4 != 0))
                correct = true;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day <= 30)
                correct = true;
            break;
        default:
            break;
    }
}
if (!correct)
    alert ("Incorrect date!");
else {
    if (day == 31 && month == 12) {
        day = 1;
        month = 1;
        year++;
    }
    else if (
        (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10))
        || (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11))
        || (month == 2 && (day == 28 || day == 29))
    ) {
        month++;
        day = 1;
    }
    else
        day++;
}
alert (`Next date is ${day}.${month}.${year}`);