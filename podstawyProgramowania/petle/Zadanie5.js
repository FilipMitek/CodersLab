var n = 5;
var linia = "";

for(var i =0; i<n; i++){
    linia = "";
    console.log(linia);
    if(i%2==0){
        for(var j = 0; j<n; j++){
        if(j%2==0){
        linia+=" ";
        }
        else{
            linia+="*";
        }
          
    }
  console.log(linia);   
    }
    else{
        for(var j = 0; j<n; j++){
        if(j%2==0){
        linia+="*";
        }
        else{
            linia+=" ";
        }
          
    }
  console.log(linia);   
    }
   
}