function theBiggest(arguments){
    
    return Math.max.apply(null,arguments);
}

var array = [123123,1,2,3,99999999];
console.log(theBiggest(array));



function myInterv(n){
    var a =0;
    var interv = setInterval(function(){
        if(a ==n){
            clearInterval(interv);
        }
        else{
            console.log("Hello " + (a+1));
            a++;
        }
        
    },500);
}

//myInterv(10);

sayHello();

function sayHello(){
    inter = setInterval(function(){
        console.log("Czesc");
    },500)
}

witaj();

witaj = function Witas(){
    inter = setInterval(function(){
        console.log("Czesc");
    },500)
}
