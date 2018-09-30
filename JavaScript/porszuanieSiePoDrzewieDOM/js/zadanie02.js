/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function(){
var randomColor ;
var element = document.querySelectorAll('.button');
console.log(element);

  for(i=0;i<element.length;i++){
    element[i].addEventListener('click',function(event){
      randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      parent = this.parentElement;
      parent.style.backgroundColor = randomColor;
    });
  }
});
