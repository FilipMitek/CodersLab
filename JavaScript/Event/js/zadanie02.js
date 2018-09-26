/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {



    var button = document.getElementById('mainBtn');
    console.log(button);

     function saySomething(){
       console.log('Hurra to dziarga');
     };

     button.addEventListener('click',saySomething);

});
