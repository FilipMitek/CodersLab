var samochod ={
     marka : "Fiat",
     kolor : "niebieski",
     przebieg : 0,
     printCarInfo : function(){
         return this.kolor + " " +this.marka+ " "+this.przebieg;
     },
     drive : function(km){
            this.przebieg+=km;
            return km;
    }
    
};
console.log("Przebieg start " + samochod.przebieg);
samochod.drive(5);
console.log("Przebieg pierwszy rok " +samochod.przebieg);
samochod.drive(55);
console.log("Przebieg drugi rok " +samochod.przebieg);


samochod.przeglad = [];
samochod.nowyPrzeglad = function(data){
    this.przeglad.push(data);
}
samochod.pokazPrzeglady =function(){
    return this.przeglad;
}

samochod.nowyPrzeglad("styczeń");
samochod.nowyPrzeglad("lipiec");
samochod.nowyPrzeglad("wrzesień");
samochod.nowyPrzeglad("październik");
samochod.nowyPrzeglad("październik");
samochod.nowyPrzeglad("październik");

console.log(samochod.pokazPrzeglady());

var rectangle = function (szerokosc,wysokosc){
    this.szerokosc = szerokosc;
    this.wysokosc = wysokosc;
};



rectangle.prototype.getArea = function(){
    console.log(this.szerokosc*this.wysokosc);
}

rectangle.prototype.getPerimiter = function(){
    console.log((2*this.szerokosc)+(2*this.wysokosc));
}

var prostokat1 = new rectangle(10,5);
var prostokat2 = new rectangle(20,29);
var prostokat3 = new rectangle(2123,21);
prostokat1.getArea();
prostokat2.getArea();
prostokat3.getPerimiter();




// Kalkulator //

var Calculator = function(num1,num2){
    this.num1= num1;
    this.num2= num2;
    this.historia = [];
};

Calculator.prototype.add = function(){          
    this.historia.push("added "+this.num1 + " to " + this.num2+" got result "+ (this.num1+this.num2));
    return this.num1+this.num2;
}
Calculator.prototype.multiply = function(){
    this.historia.push(this.num1 + " * " + this.num2);
       return this.num1*this.num2;
}
Calculator.prototype.subtract = function(){
    this.historia.push(this.num1+" - "+this.num2);
     return this.num1-this.num2;
}
Calculator.prototype.divide = function(){
    console.log(this.num1/this.num2);
    this.historia.push(this.num1+"/"+this.num2);
}
Calculator.prototype.printOperations = function(){
    console.log(this.historia);
}
Calculator.prototype.clearOperations = function(){
    this.historia =[];
}

Pierwsza = new Calculator(5,5);
Druga = new Calculator(6,6);

Pierwsza.add();
Pierwsza.multiply();
Pierwsza.subtract();
Pierwsza.divide();

Pierwsza.printOperations();
Pierwsza.clearOperations();
Pierwsza.printOperations();
