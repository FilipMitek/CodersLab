// Zadanie 1

var firstTaskArray = [5,3,6];

console.log(firstTaskArray[0]);
console.log(firstTaskArray[1]);
console.log(firstTaskArray[2]);

// Zadnie 2
// AD 1
var secondTaskArray = [
    "Banan",
    "Truskawka",
    "Malina"
];
console.log(secondTaskArray[0]);

console.log("");    // AD 2 

var secondTaskArrayLength;

console.log(secondTaskArray[secondTaskArray.length -1]);

console.log("");    //AD 3

for(var i=0;i<secondTaskArray.length;i++){
    console.log(secondTaskArray[i]);
}

// Zadanie numer 3

var taskThirdArray = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
var sum = 0;

for(var i=0;i<taskThirdArray.length;i++){
    sum = sum + taskThirdArray[i];
}
console.log("Suma wszystkich elementów tablicy to : " + sum);

//Zadanie numer 4

var taskFourthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var toCheck = 0;
var evenNumber = 0;

for(var i=0;i<taskFourthArray.length;i++){
    toCheck = taskFourthArray[i];
    if(toCheck % 2 ==0){
        console.log("Liczba : " + toCheck + " jest parzysta");
        evenNumber = evenNumber + toCheck;
    }
    else
        console.log("Liczba : " + toCheck + " nie jest parzysta");
}
    console.log("Suma wszytkich liczb parzystych to : " + evenNumber);

// Zadanie numer 5

var fifthTaskNumber = [5, 6, 7, 98, 43, 10, 15, 16, 17, 18];
var max = 0 ;

for(var i=0;i<fifthTaskNumber.length;i++){
    if(fifthTaskNumber[i]>max){
        max = fifthTaskNumber[i];
    }
}
console.log("Najwieksza liczba z tablicy to  :"+ max);

// Zadanie numer 6

var sixthTaskArray = [2123, 12, 11, 1, 21, 111, 2, 42, 123, 0, 111];
var firstIndex ;
var Index ;

for(var i=0;i<sixthTaskArray.length;i++){
    console.log("Petla pierwsza : " + sixthTaskArray[i]);
    for(var j=0;j<sixthTaskArray.length;j++){
        if(sixthTaskArray[i]==sixthTaskArray[j] && i !=j){
            console.log("Petla druga : " + sixthTaskArray[j]);
              Index = j;
        }   
    }
}

console.log("Index : " + Index);

// Zadanie numer 7

var seventhTaskArray = [1,2,3,4,5,6,7,8,9,10,11];

for(var i=seventhTaskArray.length;i>=0;i--){
 console.log(seventhTaskArray[i]);   
}
    
