/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded',function() {

  var menu = document.querySelector("#menu");
  var paragraf = document.querySelector("p");

  menu.classList.add("menu");
  paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});



//Zad 1
//Przeniesienie wczytania skryptow na poczatek dokumentu html spowodowało wczytanie skryptu odrazu przy ładowaniu strony. Wczesniej przy srypcie wczytywanym z dołu, nic się nie wykonywało. Jednoczesnie wczytanie skryptow pozniej powoduje nieco szybsze wczytanie się samej strony (html/css).

//1.2 Nie poprawilo to sytuacji poniewaz nic nie zostalo stworzone w celu inerakcji (jeszcze)
//1.3 Brak zauwazalnych zmian
