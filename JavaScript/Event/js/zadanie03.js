/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function() {

      var buttons = document.querySelectorAll('button');
      var counter = document.querySelectorAll('.counter');
      var a=0,
          b=0,
          c=0;
console.log(buttons);
        buttons[0].addEventListener('click',function(event){
              a+=1;
              counter[0].innerHTML = a;
        });
        buttons[1].addEventListener('click',function(event){
              b+=1;
              counter[1].innerHTML=b;
        })
        buttons[2].addEventListener('click',function(event){
          c+=1;
          counter[2].innerHTML = c;
        })


});
