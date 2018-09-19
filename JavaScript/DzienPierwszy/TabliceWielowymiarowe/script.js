var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

// Zadanie 1

//console.log(task1Array[3][2]);
//console.log(task1Array[2].length);
//console.log(task1Array[4][2]);

// Zadanie 2


//Pkt 1
for(i=0;i<task2Array[0].length;i++){
    //console.log(task2Array[0][i]);
}
//Pkt 2

for(i=0;i<task2Array.length;i++){
    console.log(task2Array[i].length)
}

//Pkt 3
 for(i=0;i<task2Array.length;i++){
     for(j=0;j<task2Array[i].length;j++){
        // console.log(task2Array[i][j]);
     }
 }

function print2DArray(array){
    
    for(i=0;i<array.length;i++){
        for(j=0;j<array[i].length;j++){
            console.log(array[i][j]);
        }
    }
    
    return ;
}

var array2D = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 11230, 11, 12]
            ];
var myArray2D =[
                [5,5,5,5],
                [6,6,6,6],
                [7,7,7,7],
            ]
print2DArray(array2D);
print2DArray(myArray2D);

function create2DArray(rows,column){
    var array= [],
        number=0;
    
    for(i=0;i<rows;i++){
        array[i]=[];
        for(j=0;j<column;j++){
            array[i][j]=number;
            number++;
           
        }
    }
    console.log(array);
}
create2DArray(2,3);



// Zadanie 6

function unitMatrix(){
    var array = [];
    
    for(i=0;i<4;i++){
        array[i]=[];
        for(j=0;j<4;j++){   
            if(i==j){
                array[i][j] = 1;
            }
            else array[i][j] = 0;
        }
    }
    return array;
}

console.log(unitMatrix());