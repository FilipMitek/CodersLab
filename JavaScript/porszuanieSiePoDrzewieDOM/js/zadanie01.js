document.addEventListener('DOMContentLoaded',function(){
  var buttons = document.querySelectorAll('.button');
  var boxes = document.querySelectorAll('.box');

  console.log(buttons);
  console.log(boxes);

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function(event){
    var box = this.nextElementSibling;
    if(box.style.display === 'none'){
      box.style.display = 'block';
    }
    else {
      box.style.display = 'none';
    }

  });
  }

});
