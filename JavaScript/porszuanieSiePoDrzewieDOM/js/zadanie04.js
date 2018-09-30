/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function(){
  var firstClass = document.querySelector('.first');
  var FirstClassFirstChild = firstClass.firstElementChild;
  var FirstClassLastChild = firstClass.lastElementChild;
  console.log(FirstClassFirstChild);
  console.log(FirstClassLastChild);



  var idElement = document.querySelector('#second');
  var idElementParent = idElement.parentElement;
  var idElementParent4Child = idElementParent.children[3];
  console.log(idElementParent);
  console.log(idElementParent4Child);


  var info = document.querySelector('[data-ex="third"]');
  info = info.parentElement;
  info = info.parentElement;
  lastInfo = info.lastElementChild;
  firstInfo = info.firstElementChild;

  console.log(lastInfo);
  console.log(firstInfo);
});
