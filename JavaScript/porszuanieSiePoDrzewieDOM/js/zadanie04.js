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
  console.log(lastInfo);
  var lastInfoFirstChild = lastInfo.firstElementChild;
  console.log(lastInfoFirstChild);

  var allChildren = lastInfoFirstChild.children;
  var elementNumber = Math.round((allChildren.length-1)/2);
  console.log(elementNumber);
  console.log(allChildren[elementNumber]);




  var lastEx = document.querySelector('.forth').parentElement;
  console.log(lastEx);
  var articleTag = lastEx.querySelector('article p');
  console.log(articleTag);
  var firstArticle = articleTag.nextElementSibling;
  firstArticle = firstArticle.nextElementSibling;
  console.log(firstArticle);
});
