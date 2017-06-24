/**
 * Created by imachd on 24/06/2017.
 */
var myNoteList = document.getElementsByTagName('li');
closeElement()
function closeElement() {
    for( var i = 0;i<myNoteList.length;i++){
        var span=document.createElement('span');
        var deleteItem = document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(deleteItem);
        myNoteList[i].appendChild(span);

    }
}

function DeleteItem() {
    var close = document.getElementsByClassName('close');
    var i;
    for(  i=0;i<close.length;i++){
        close[i].onclick=function () {
            var div =this.parentElement;
            div.style.display='none';
        }
    }
}

var list = document.querySelector('ul');
list.addEventListener('click',function (event) {
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
    }


},false);

function newElement() {
    var element = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    element.appendChild(text);
    if(inputValue===""){
        alert("please enter a new task")
    }
    else{
        document.getElementById('myUL').appendChild(element);
        // for( var i = 0;i<myNoteList.length;i++){
        //     var span=document.createElement('span');
        //     var deleteItem = document.createTextNode("\u00D7");
        //     span.className="close";
        //     span.appendChild(deleteItem);
        //     myNoteList[i].appendChild(span);
        //
        // }
        closeElement();
        DeleteItem();

    }
    // close();

}