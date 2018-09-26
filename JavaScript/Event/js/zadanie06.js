
document.addEventListener('DOMContentLoaded',function () {

  var block = document.getElementById('box');

  block.addEventListener('onmousemove',function(event){
    block.style.backgroundColor = 'red';
  })
});
