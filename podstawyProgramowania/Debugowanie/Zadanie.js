/* Ta funkcja nie robi nic sensownego.
*/
function doSomething(number) {
    var numberOfSlides = 10;
    var slideWidth = 400;
    var baz;

    var foo = "Galeria ma" ;  // Blad w postaci braku zamkniecia nawiasu
    console.log(foo + numberOfSlides + ' zdjęcia');

    var naj = "naj ";
    for(var i = 0; i < numberOfSlides - 1; i++) { //Błąd zle uzyta zmeinaa
      var bar = "Zdjęcie nr " + i + " lubię " + naj + " bardziej";
      console.log(bar); //Błąd zła nazwa zmiennej
      naj += " naj";
    }
}
 doSomething(2);