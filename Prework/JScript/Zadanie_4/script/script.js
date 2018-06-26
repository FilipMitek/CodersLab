// Zadanie 1
var task1FirstNumber = 5;
var task1SecondNumber = 3;

if (task1FirstNumber > task1SecondNumber) {
    console.log ("Pierwsza liczba jest większa");
}
else
    console.log("Druga liczba jest większa");


// Zadanie 2

var task2FirstNumber = 23;
var task2SecondNumber = 1112;
var task2ThirdNumber = 2321;

if (task2FirstNumber > task2SecondNumber){
    console.log("Pierwsza liczba jest największa");
}
else if (task2SecondNumber > task2ThirdNumber ){
    console.log("Druga liczba jest największa ");
}
else 
    console.log("Trzecia liczba jest największa ");

// Zadanie 3

var loop = 0;

for (loop;loop<10;loop++){
    console.log("Lubię JavaScript");
}

// Zadanie 4

var result = 0;

for (var i = 0; i<10;i++){
    result = result + i;
    console.log(result);
}

// Zadanie 5

var n = 5;

for (var i = 0; i<=n;i++){
  if(i%2 == 0){
      console.log(i+ " parzysta");
  }
  else
      console.log(i + " nieparzysta");
}

// Zadanie 6

for ( var i = 0; i<=10; i++){
    for ( var j = 0; j<10; j++){
         console.log("i = "+ i + ", j= "+j);
    } 
}

// Zadanie 8
var size = 5;
var size2 = 1;
var line = " ";

for (var i = 0;i<size;i++){
    line = " ";

    for (var j=0;j<size2;j++){
         line = line + "* " 
        for(var x=0;x<size;x++){
           
        }
    
    }
    
    if(size2<5){
        size2++ ;
    }
    else
        size2 = 0 ;
    console.log("");
    console.log(line);
}

// Zadanie 9
