"use strict";

window.onload = function() {
    $('add').onclick = add;
    $('delete').onclick = remove;
};

function add() {
    var image = document.createElement("img");
    image.src = $("url").value;
    console.log(image.src);
    image.className = "image";
    image.onerror = function() {
        this.remove();
    };
    $("blank_area").appendChild(image);

}

function remove() {
    alert("delete");
}

