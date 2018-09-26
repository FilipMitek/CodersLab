/**
 * Created by Jacek on 2016-01-12.
 */


document.addEventListener('DOMContentLoaded',function(){

    var buttons = document.querySelectorAll('button');
    var counter = document.querySelector('.counter');
    var a = 0;
    console.log(buttons);

    for (var i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click',function(event){
            a+=1;
            counter.innerHTML = a;
          });
      };

});
