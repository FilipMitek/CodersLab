

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
     console.log(homeElement);
     for (var i = 0; i < childElements.length; i++) {
       console.log(childElements[i]);
     }
     console.log(banner);
     for (var i = 0; i < blocks.length; i++) {
       console.log(blocks[i]);
     }
     for (var i = 0; i < links.length; i++) {
       console.log(links[i]);
     }

     console.log(typeof homeElement);
     console.log(typeof childElements);
     console.log(typeof banner);
     console.log(typeof blocks);
     console.log(typeof links);


     console.log(homeElement.className);
     console.log(childElements.className);
     console.log(banner.className);
     console.log(blocks.className);
     console.log(links.className);

     console.log(document.getElementsByClassName('blocks'));
     console.log(blocks.outerHTML);
     console.log(homeElement.id);

     for (var i = 0; i < childElements.length; i++) {
       console.log(childElements[i].tagName);
     }

     for (var i = 0; i < links.length; i++) {
       console.log(links[i].dataset);
     }

     console.log(banner.className);
     console.log(banner.classList);
   });
