/* Zadanie 1 

var myFavoriteFruit=[
    "apple",
    "orange",
    "banana",
    "lemon",
    "melon",
    "pear"
]

console.log(myFavoriteFruit[0]);
console.log(myFavoriteFruit[myFavoriteFruit.length -1 ])

for(i=0;i<myFavoriteFruit.length;i++){
    console.log(myFavoriteFruit[i]);
}

/**********************************************************************/

/* Zadanie 2 

function createArray(number) {
    var newArray = [];
    

            for(var counter = 1; counter <= number; counter++) {
                newArray.push(counter);
            }
        return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));


/**********************************************************************/


/* Zadanie 3 

function printTable(array){
    
    for(i=0;i<array.length;i++){
        console.log(array[i]);
    }
return ;
}

var tablica = [1,2,3,4,5,6,7,8,9,10];
printTable(tablica);

/**********************************************************************/


/* Zadanie 4 

function add(array){
    var sum =0;
    
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    return console.log(sum);
}

function multiply(array){
    var mul = 1;
    
    for(i=0;i<array.length;i++){
        mul*=array[i];
    }
    return console.log(mul);
}
table = [1,2,3,4,5,6,7,8,9,10];
add(table);
multiply(table);

/**********************************************************************/



/* Zadanie 

function getAverage(array){
    avg = 0;
    sum = 0;
    
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    avg = sum / array.length;
    
    return avg;
}
table = [1,2,3,4,5,6,7,8,9,10];

console.log(getAverage(table));


/**********************************************************************/

/* Zadanie 6 

function distFromAverage(array){
    var avg = 0,
        sum = 0,
        table = [];
    
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    avg = sum / array.length;
    
    for(i=0;i<array.length;i++){
        table[i]=avg-array[i];
        if(table[i]<0){
            table[i]*=-1;
        }
    }
    return table;
}

table = [1,2,3,4,5,6,7];
table1 = [1,1,1,1];
table2 = [2,8,3,7];
console.log(distFromAverage(table));
console.log(distFromAverage(table1));
console.log(distFromAverage(table2));
/**********************************************************************/

/* Zadanie 7 

function factors(number){
    var array =[];
        
    for(i=0;i<=number;i++){
        if(number%i==0){
            array.push(number/i);
        }
    }
    return array;
}

console.log(factors(4));
/**********************************************************************/

/* Zadanie 

function getMissingElement(array){
    
   var firstNumber = array[0],
       lastNumber = array[array.length-1],
       currentNumber =[],
       missingElement ,
       missingElementArray=[],
       a= 0,
       b=0;
     
    for(i=firstNumber;i<=firstNumber+array.length-1;i++){ //Inicjalizacja tablicy do porowniania
        currentNumber.push(i);
        a++;
    }
    
    for(i=0;i<=array.length;i++){
        if(array[i]==currentNumber[i]){
            missingElement ="null";
            
        }
        else if(array[i]!=currentNumber[i]){
            missingElementArray[b]=currentNumber[i];
            b++;
            break;
        }
    }
    
    
    console.log(currentNumber);
    console.log(array);
    return missingElementArray;
}

tab =[6,7,8,9,11];
console.log(getMissingElement(tab));
/**********************************************************************/

/* Zadanie 9 

function sortArray(array){
    var auxArray;
    
    auxArray=array.sort(function(a,b){
        return a-b;
    });
    return auxArray;
}
array=[1,2,4145,9,9];
console.log(sortArray(array));

/**********************************************************************/


/* Zadanie 10 

function sortArray(array){
    var auxArray;
    
    auxArray=array.sort(function(a,b){
        return a-b;
    });
    return auxArray;
}
array=[1,2,4145,9,9];
console.log(sortArray(array));

/**********************************************************************/

/* Zadanie 11 */

function addArray(array1,array2){
    
    var sum = [];
    
    // Wypelnianie reszty tablicy zerami tak aby ich długośc yła sobie równa
    if(array1.length>array2.length){
        for(i=array2.length;i<array1.length;i++){
            array2.push(0);
        }
    }
    else if(array2.length>array1.length){
        for(i=array1.length;i<array2.length;i++){
            array1.push(0);
        }
    }
    

    //Dodawanie tablic
        for(i=0;i<array1.length;i++){
        sum.push(array1[i]+array2[i]);
        }
    
    
    return sum;
}
arr1=[2,2,2,2,12];
arr2=[5,5,5,5,17,1];
console.log(addArray(arr1,arr2));
/**********************************************************************/
    