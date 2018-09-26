/**
 * Created by Jacek on 2016-01-12.
 */



document.addEventListener("DOMContentLoaded", function() {
window.addEventListener('resize', function(event) {
  var winHeight = window.innerHeight;
  var winWidth =  window.innerWidth;
  
  document.getElementById('windowHeight').innerHTML = winHeight
  document.getElementById('windowWidth').innerHTML = winWidth
  });
});
