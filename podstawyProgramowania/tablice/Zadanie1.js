
    
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var AVG = 0;

for (var i = 0;i<array.length;i++){
     AVG = AVG + array[i];
}
 AVG = AVG/array.length;

console.log("Wynik średniej tablicy to : " + AVG);
