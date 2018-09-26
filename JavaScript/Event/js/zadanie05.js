/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function () {

  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  var boxes = document.querySelectorAll('.box');

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',function(event){
      this.style.backgroundColor = randomColor;
      randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
  };
});
