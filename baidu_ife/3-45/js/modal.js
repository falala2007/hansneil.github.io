/**
 * Created by hansneil on 21/4/16.
 */
function Modal(){
}
Modal.prototype.show = function(source, section){
    var sec = document.createElement('section');
    var image = document.createElement('img');
    var span = document.createElement('span');
    var clone = section.cloneNode(true);
    span.className = "close";
    span.innerHTML = "&times;";
    sec.className = "modal";
    image.src = source;
    image.className = "large";
    sec.appendChild(span);
    clone.className += " middle";
    document.body.appendChild(clone);
    document.body.appendChild(sec);
    image.onload = function(){
        if (image.width / document.body.clientWidth > image.height / document.body.clientHeight) {
            image.style.width = document.body.clientWidth * 0.8 + "px";
        } else {
            image.style.height = document.body.clientHeight * 0.8 + "px";
        }
        sec.appendChild(image);
        document.body.removeChild(clone);
    }
};
Modal.prototype.hide = function(elem) {
    document.body.removeChild(elem);
}