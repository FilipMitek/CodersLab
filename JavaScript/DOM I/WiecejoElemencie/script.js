// Zadanie 1

var cos = document.querySelector('.exercise.ex1');
var ktos = cos.querySelectorAll('div');
console.log(ktos);

console.log(ktos[4]);


// Chrome
var chromeLinkName= ktos[0].querySelector('a').innerHTML  = 'Chrome';
console.log(chromeLinkName);
ktos[0].querySelector('.chrome').style.backgroundImage = 'url("img/chrome.png")'
ktos[0].querySelector('.chrome').style.backgroundSize = '100px 100px';
ktos[0].querySelector('.chrome').style.border = '1px solid black';
ktos[0].querySelector('.chrome').style.height = "100px";
ktos[0].querySelector('.chrome').style.width = '100px';




//Microsoft Edge
var edgeLink = ktos[2].querySelector('a');
edgeLink.href = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';
console.log(edgeLink);


//firefox
var firefoxName = ktos[4].querySelector('a');
firefoxName.innerHTML = "Firefox";
var firefoxLink = ktos[4].querySelector('a');
firefoxLink.href = 'https://www.mozilla.org/pl/firefox/';
console.log(firefoxName);
console.log(firefoxLink);

function changePhoto() {
  ktos[0].querySelector('.chrome').style.backgroundImage = 'url("img/firefox.png")';
  return ;
  }

  /*
  ***********************Zadanie 2**************************
  */
 var listEx3 = document.querySelectorAll('.exercise.ex2 span');
console.log(listEx3);
listEx3[0].innerHTML = 'Filip Mitek';
listEx3[1].innerHTML = 'Blue';
listEx3[2].innerHTML = 'Pizza';
console.log(listEx3[0]);
console.log(listEx3[1]);
console.log(listEx3[2]);

/*
***********************Zadanie 3**************************
*/

document.querySelector('.exercise.ex3 ul').classList.add('menu');
console.log(document.querySelector('ul').classList);

/*
***********************Zadanie 4**************************
*/
var listEx4 = document.querySelectorAll('.exercise.ex3 li');
for (var i = 1; i <3 ; i++) {
  listEx4[i].classList.add('menuElement');
  console.log(listEx4[i]);
}
console.log(listEx4);

var errorRemove =document.querySelectorAll('.error');

for (var i = 0; i < errorRemove.length; i++) {
  errorRemove[i].classList.remove('error');
}

//var listEx44 = document.querySelectorAll('.exercise.ex4 ul li');
  //for (var i = 0; i < listEx44.length; i++) {
  //  listEx44[i].dataset.id = i+1;
  //}
  //console.log(listEx44[3].dataset);


  var listEx44 = document.querySelectorAll('.exercise.ex4 ul li');
  for (var i = 0; i < listEx44.length; i++) {
    listEx44[i].setAttribute('data-id',i+1);
  }
  console.log(listEx44[0].dataset);


  var listEx5 = document.querySelectorAll('.exercise.ex5 ul li');
    for(i=0; i<listEx5.length;i++){
      if(listEx5[i].dataset.direction == null){
        listEx5[i].dataset.direction = 'up';
      }
    }
    console.log(listEx5[3].dataset.direction);

var ListEx55 = document.querySelectorAll('.exercise.ex5 ul li:nth-child(even)');
console.log(ListEx55);
for (var i = 0; i < ListEx55.length; i++) {
  ListEx55[i].style.backgroundColor = '#00ff00';
}
var Listex5Big = document.querySelector('.exercise.ex5 ul li:nth-child(5)');
Listex5Big.classList.add('big');
Listex5Big.style.backgroundColor = 'gray';
console.log(Listex5Big);
console.log(Listex5Big.dataset);


document.addEventListener('DOMContentLoaded', function(){
  console.log('Page loaded');

});
