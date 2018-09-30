document.addEventListener('DOMContentLoaded',function(){

  var block = document.querySelector('div');

  block.addEventListener('mousemove',function(event){
    document.getElementById('globalX').innerHTML =event.clientX;
    document.getElementById('globalY').innerHTML =event.clientY;
    document.getElementById('localX').innerHTML =event.screenX;
    document.getElementById('localY').innerHTML =event.screenY;
    });

  });
