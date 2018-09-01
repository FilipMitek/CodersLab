var firstArray=[4, 55, 22, 11, 10, 5, 1];
var secondArray=[5, 55, 2, 11, 5, 3, 1];
var checkArray = "";


for(var i = 0; i<firstArray.length; i++) {
    if(firstArray[i] == secondArray[i]){
        checkArray = checkArray + firstArray[i] + ",";
    }
}
        console.log(checkArray);



