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
