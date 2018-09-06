function FooBar(x){
    
     var wynik = "";
    for(var i =0; i<x; i++){
     if(i%3==0 && i%5!=0){
         wynik += "Foo";
     }
        else if(i%5==0){
            wynik += "Bar";
        }
        else if(i%3==0 && i%5==0){
            wynik += "FooBar";
        }
        else{
            wynik += i ;
        }
    }
      return wynik;
}
console.log(FooBar(5));

// Zadanie 2

function Pow(a,b){              /*Potęgowanie liczb 3^3 = 3*3*3*/
    var result=1;
    if(b!=0){
        for( var i=0; i<b; i++){
            result *= a;
        }
    }
      else{
            result = 1 ;
        }
    return result;
}
console.log("Wynik potęgowania to : " + Pow(3,18));

// Zadanie 3

function mixed(name){
    var length = name.length;
    var finalchar = "";
    
    if(name[length-1]=="a"){
        finalchar = "zmiksowana "
    }
    else{
        finalchar = "zniksowany "
    }
    return(finalchar + name);
}
console.log(mixed("jabłko"));

//Zadanie 4

function string(n){
    var inscription = "Programowanie jest fajne";
    
    for(var i=0; i<n;i++){
        console.log(inscription);
    }
}

console.log(string(15));


// Zadanie 5

function theBiggestNumber(q,w,e){
    var biggest;
    if(q>w && q>e){
        biggest = q;
    }
    else if(w>q && w>e){
        biggest = w;
    }
    else if(e>q && e>w){
        biggest = e;
    }
    else biggest = "Podane liczby są równe "
    return biggest;
}

console.log(theBiggestNumber(2,2,2));


// Zadanie 6

function array(tab){
    var sum = 0;
    for(var i=0; i<tab.length; i++){
        sum+=tab[i];
    }
    return sum;
}
var tablica= [1, 55, 3];
console.log("Suma podanych liczb to : " + array(tablica));

// Zadanie 7

var txt = function(){
    for(var i =0;i<10;i++){
        console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych");
    }
}

txt();

// Zadanie 8

function rentCost(days){
    var price,
        pricePerDay,
        bonus = -50,
        numberOfWeeks = Math.floor(days/7);
                                   
        switch(days){
            case 1: pricePerDay = 200;
                break;
            case 2: case 3: pricePerDay = 180;
                break;
            case 4: case 5: case 6: case 7: pricePerDay = 160;
                break;
            default : pricePerDay= 150;    
        }

        if(numberOfWeeks%2==0 || numberOfWeeks==1){
           price = (days * pricePerDay)+bonus;
        }
        else
            price = days * pricePerDay; 
    
    return price;
}

console.log("Cena za pobyt to : " + rentCost(8));


// Zadanie 9

function rockPaperScissors(player1,player2){
          
        var winner ="";
    
    if(player1!=player2){
        if((player1=="kamien" && player2=="nozyce") || (player1=="nozyce" && player2=="papier") || (player1=="papier" && player2=="kamień")){
            winner = "Gracz 1 wygrał";
        }
        else{
            winner = "Gracz 2 wygrał";                                    
        }                              
     }
    else 
        winner = "Remis!";
    return winner;
    }
                                                    
console.log(rockPaperScissors("nozyce","kamien"));

//Zadanie 10

function calculateTip(amount,rating){
    
    var cost;
    
    cost = amount; 
    
    switch(rating){
        case "Bardzo dobra obsluga" : cost *=0.25;
            break;
        case  "Dobra obsluga" : cost *=0.2;
            break;
        case "Srednia obsluga" : cost*= 0.15;    
            break;
        case "Zla obsluga" : cost = 0;
            break;
        default : cost = "Opis nieczytelny";        
    }
    
    return cost;
}

console.log("Napiwek : " + calculateTip(100,"Zla obsluga"));


// Zadania dla chętnych !

// Zadanie Z1

function bruteForce(number){
    
    var primeNumber,
        divCount = 0;
    
    
    
    for(var i=2;i<=number;i++){
        if(number%i==0){
            divCount  +=1;
        }
    }
    if(divCount==1){
        primeNumber = true;
    }
    else primeNumber = false;
    
    return primeNumber;
}
console.log(bruteForce(99));

//Zadanie Z2
function PInumber(count){
    var PIAux = 0,
        PI = 0,
        a = 1,
        b = 3;
    
        for(var i =0;i<=count;i++){
            PIAux+= (1/a - 1/b);
            PI = 4 * PIAux;
            a+=4;
            b+=4;      
        }
    return PI;
}

console.log(PInumber(999));