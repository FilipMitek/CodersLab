// Zadanie numer 1
var firstBool = true;
var secondBool = false;

console.log(firstBool==secondBool);

//Zadanie numer 2 
var firstNumber = 12;
var secondNumber = 12;
var resultModulo = 0;

resultModulo = firstBool % secondBool;

console.log("Variable result modulo : " +resultModulo);

//Zadanie numer 3
var firstString = "Filip ";
var secondString = "Mitek";
var joinedStrings = "";

joinedStrings = firstString + secondString;
console.log("Moje imie to : " +joinedStrings);

//Zadanie numer 4
var myNumber = 4;
var myString = "4";

console.log(myNumber==myString);
console.log(+ myNumber===myString);
/*
operacja == porownoje wartosci zas operacja === porownuje typy oraz wartosci, dlatego wynik pierwszej operacji daje nam true zas wynik drugiej false */

// Zadanie numer 5

var counter = 145;
console.log("Counter : "+counter);

counter++;
console.log("Counter ++ : "+counter);

counter--;
console.log("Counter -- : "+counter);

// Zadanie numer 6

var number1 = 123;
var number2 = 231;
var result = null;

result = number1 > number2 ;
console.log("Czy pierwsza liczba jest równa drugiej : " +result);
