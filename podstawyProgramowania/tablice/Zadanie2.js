var randomArray=[];
var orderedArray =[];

for(var i = 0; i<10 ; i++){
    randomArray[i]=Math.floor(Math.random() * 60) + 1;
    if (randomArray[i]%2!=0){
        orderedArray[i]=randomArray[i]+1
    }
    else{
        orderedArray[i]=randomArray[i];
    }
}

console.log("Tablica losowa : " + randomArray);
console.log("Tablica uporządkowana : " + orderedArray);