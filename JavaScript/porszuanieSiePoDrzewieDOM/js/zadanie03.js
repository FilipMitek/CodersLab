/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function(){
  var container = document.querySelectorAll('.listContainer');

    for(i=0;i<container.length;i++){
      container[i].addEventListener('mouseover',function(event){
        var list = this.querySelector('.list');
        var itemList = list.children;
        console.log(itemList);
        for(j=0;j<itemList.length;j++){
            itemList[j].style.backgroundColor ='gray';
        }
        list.firstElementChild.style.backgroundColor = 'red';
        list.lastElementChild.style.backgroundColor = 'blue';
      });
    }
});
